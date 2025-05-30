
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-base text-muted-foreground">
        <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        <p className="mt-2">Design And Developed By Vikrant shekhawat</p>
      </div>
    </footer>
  );
}
