export function setCookie(
  key: string,
  value: string,
  { expires, path = "/", samesite = "None", secure = false }: CookieOptionsType,
) {
  document.cookie = `${key}=${value}; expires=${new Date(Date.now() + expires)}; SameSite=${samesite}; path=${path}; ${
    secure || samesite === "None" ? "Secure;" : ""
  }`;
}

export function getAllCookies(): Record<string, any> | undefined {
  if (document.cookie.length === 0) return;

  const cookies = document.cookie.split(";").map((cookie) => {
    const splitCookie = cookie.split("=");

    return {
      [splitCookie[0].trim()]: splitCookie[1],
    };
  });

  const formattedCookies = Object.assign({}, ...cookies) as Record<
    string,
    string
  >;

  return formattedCookies;
}

export function getCookie<R = unknown>(key: string): R | undefined {
  const cookies = getAllCookies();

  if (!cookies) return;

  return cookies[key];
}

export function deleteCookie(key: string) {
  if (getCookie(key)) {
    document.cookie = `${key}=deleted; expires=${new Date(-1)};`;
  }
}

interface CookieOptionsType {
  path?: string;
  expires: number;
  secure?: boolean;
  samesite?: "Strict" | "Lax" | "None";
}
