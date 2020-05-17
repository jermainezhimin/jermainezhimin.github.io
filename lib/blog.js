import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogsDirectory = path.join(process.cwd(), 'blogs')

export function getSortedBlogsData() {
  // Get file names under /blogs
  const fileNames = fs.readdirSync(blogsDirectory)
  const allblogsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(blogsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the blog metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })
  // Sort blogs by date
  return allblogsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getBlogData(id) {
  const fullPath = path.join(blogsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the blog metadata section
  const matterResult = matter(fileContents)
  // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(react)
  //   .process(matterResult.content)
  // console.log('test', processedContent)
  // const contentHtml = processedContent.result
  // console.log('htmlcontent', contentHtml)
  // Combine the data with the id and contentHtml
  return {
    id,
    // contentHtml,
    contents: matterResult.content,
    ...matterResult.data,
  }
}
