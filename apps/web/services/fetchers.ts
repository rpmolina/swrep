export const getBaseUrl = () => {
  return process.env.BACKEND_API_BASE_URL;
};

export const mapToSearchParams = (params: Record<string, string>) => {
  return '?' + new URLSearchParams(params).toString();
};

export async function get<T>(url: string, params?: Record<string, string>): Promise<T> {
  const queryString = params ? mapToSearchParams(params) : '';
  const response = await fetch(getBaseUrl() + url + queryString, {
    method: 'GET',
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error(`GET ${url} failed with status ${response.status}`);
  }
  return response.json();
}