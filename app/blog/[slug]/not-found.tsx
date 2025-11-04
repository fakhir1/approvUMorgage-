import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BlogPostNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Blog post not found
        </p>
        <Link href="/blog">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg"
          >
            Back to Blog
          </Button>
        </Link>
      </div>
    </div>
  );
}
