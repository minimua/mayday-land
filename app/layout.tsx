import './globals.css'
import { LXGW_WenKai } from '@/lib/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={LXGW_WenKai.className}>{children}</body>
    </html>
  )
}
