export type LoginCredentials = {
  email: string;
  password: string;
};

type ValidationResult =
  | { ok: true }
  | {
      ok: false;
      message: string;
    };

export function validateLoginCredentials(credentials: LoginCredentials): ValidationResult {
  const email = credentials.email.trim();
  const password = credentials.password.trim();

  if (!email || !password) {
    return { ok: false, message: "Email and password are required." };
  }

  if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
    return { ok: false, message: "Enter a valid email address." };
  }

  if (password.length < 6) {
    return { ok: false, message: "Password must contain at least 6 characters." };
  }

  return { ok: true };
}
