"use server"

import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function signInWithGoogle() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  })

  if (error) {
    console.error("OAuth error:", error)
    return { error: error.message }
  }

  return { url: data.url }
}

export async function signOut() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  await supabase.auth.signOut()
  redirect("/login")
}

export async function getUserProfile() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  return {
    id: user.id,
    email: user.email,
    name: user.user_metadata?.full_name || user.user_metadata?.name || "User",
    avatar: user.user_metadata?.avatar_url || null,
  }
}
