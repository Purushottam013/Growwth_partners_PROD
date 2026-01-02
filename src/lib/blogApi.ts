const BASE_API_URL = "http://localhost:8081";

async function parseApiResponse(res: Response) {
  const text = await res.text();
  if (!res.ok) throw new Error(text || `HTTP ${res.status}`);
  try {
    const json = JSON.parse(text);
    return json?.data ?? json;
  } catch {
    return text;
  }
}

export async function getBlogPostBySlug(slug: string) {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/getBySlug`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ slug }),
  });
  return parseApiResponse(res);
}

export async function getBlogPostContentById(id: string | number) {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/getContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  return parseApiResponse(res);
}

export async function getRelatedBlogPosts(excludeId: string | number, limit = 6) {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/related`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ excludeId, limit }),
  });
  return parseApiResponse(res);
}

export async function apiListAllPosts() {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/admin/listAll`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return parseApiResponse(res);
}

export async function apiCreatePost(payload: any) {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/admin/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return parseApiResponse(res);
}

export async function apiUpdatePost(payload: any) {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/admin/update`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return parseApiResponse(res);
}

export async function apiDeletePost(payload: any) {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/admin/delete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return parseApiResponse(res);
}

export async function uploadBlogImageToApi(params: {
  file: Blob;
  folder?: string;
  filename?: string;
}) {
  const form = new FormData();
  form.append("folder", params.folder || "content-images");
  if (params.filename) form.append("filename", params.filename);
  form.append("file", params.file, params.filename || "image.webp");

  const res = await fetch(`${BASE_API_URL}/api/website/blog/admin/uploadImage`, {
    method: "POST",
    body: form,
  });

  return parseApiResponse(res);
}