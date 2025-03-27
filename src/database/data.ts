import { createClient, VercelClient } from "@vercel/postgres";

let client: VercelClient | null = null;

export async function connectToDB() {
  try {
    client = createClient();
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database", error);
    throw error;
  }
}

export async function getPosts() {
  if (!client) {
    await connectToDB();
    if (!client) {
      return [];
    }
  }

  try {
    const data = client.sql`
        SELECT
            *
        FROM posts
        LIMIT 5
    `;
    return data.then(
      (res) => {
        console.log(res.rows);
        return res.rows;
      },
      (err) => {
        console.error("Error getting posts", err);
        throw err;
      }
    );
  } catch (error) {
    console.error('Error getting posts', error);
  }
}

export async function createPost({ id, author, title, content, date }: {
  id: string,
  author: string,
  title: string,
  content: string,
  date: string
}) {
  if (!client) {
    await connectToDB();
    if (!client) {
      return [];
    }
  }

  try {
    const data = client.sql`
        INSERT INTO posts (id, author, title, content, date)
        VALUES (${id}, ${author}, ${title}, ${content}, ${date})
    `;
    return data.then(
      (res) => {
        console.log(res);
        return res;
      },
      (err) => {
        console.error("Error creating post", err);
        throw err;
      }
    );
  } catch (error) {
    console.error('Error creating post', error);
  }
}
