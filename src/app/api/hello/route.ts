import { NextResponse } from 'next/server'
function handler() {
  return NextResponse.json({ message: 'hello' })
}

export { handler as GET, handler as POST }
