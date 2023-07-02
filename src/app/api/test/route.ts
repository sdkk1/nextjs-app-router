import dayjs from 'dayjs'
import { NextResponse } from 'next/server'

export async function GET() {
  // 3秒間の処理停止
  await new Promise((resolve) => setTimeout(resolve, 3000))
  // API実行時刻を取得
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss')

  return NextResponse.json({ now })
}
