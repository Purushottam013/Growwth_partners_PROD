export async function fetchBlogPostsListing(): Promise<any[]> {
  const res = await fetch('http://localhost:8081/api/website/blog/list', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const json = await res.json();

  // Match your ApiResponseHandler format
  return json?.data ?? json;
}
