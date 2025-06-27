import { Card, CardContent } from "@/components/ui/card";
import { Mail, Newspaper, ScrollText, ShieldCheck, HomeIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 font-sans" dir="rtl">
      <header className="text-center p-4 border-b border-gray-700">
        <h1 className="text-3xl font-bold text-yellow-400">الماضي الأسود للأندية الأوروبية</h1>
        <p className="text-sm text-gray-300">خسائر مدوية، فضائح، وأحداث لا تُنسى</p>
      </header>

      <nav className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center my-4">
        <Link href="/" className="hover:text-yellow-400 flex flex-col items-center">
          <HomeIcon className="w-5 h-5" /> الرئيسية
        </Link>
        <Link href="/articles" className="hover:text-yellow-400 flex flex-col items-center">
          <Newspaper className="w-5 h-5" /> المقالات
        </Link>
        <Link href="/privacy" className="hover:text-yellow-400 flex flex-col items-center">
          <ShieldCheck className="w-5 h-5" /> سياسة الخصوصية
        </Link>
        <Link href="/terms" className="hover:text-yellow-400 flex flex-col items-center">
          <ScrollText className="w-5 h-5" /> الشروط
        </Link>
        <Link href="/contact" className="hover:text-yellow-400 flex flex-col items-center">
          <Mail className="w-5 h-5" /> تواصل معنا
        </Link>
      </nav>

      <main className="grid gap-4">
        {[
          {
            title: "أشهر الهزائم في تاريخ برشلونة",
            content:
              "في عام 2020، خسر نادي برشلونة بنتيجة 8-2 أمام بايرن ميونخ في واحدة من أكثر الهزائم إحراجاً في تاريخه..."
          },
          {
            title: "فضيحة باريس سان جيرمان أمام برشلونة",
            content:
              "بعد التقدم 4-0 في الذهاب، سقط باريس بنتيجة 6-1 في مباراة الإياب عام 2017، ما اعتبره البعض أسوأ انهيار دفاعي في دوري الأبطال..."
          }
        ].map((article, index) => (
          <Card key={index} className="bg-gray-900 border border-gray-800">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-yellow-300 mb-2">{article.title}</h2>
              <p className="text-gray-300 text-sm">{article.content}</p>
            </CardContent>
          </Card>
        ))}
      </main>

      <footer className="mt-8 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        &copy; 2025 الماضي الأسود للأندية الأوروبية. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}