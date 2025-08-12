import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ReactMarkdown from "react-markdown";
import demoMarkdown from "@/content/demo.md?raw";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-primary bg-clip-text text-transparent">
            Product Demo
          </h1>
          <p className="text-muted-foreground mt-2">
            Get a sneak peek of dorri.

            <br />
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          <section className="rounded-2xl border border-border bg-white/65 dark:bg-black/40 backdrop-blur p-6 md:p-8 shadow-glow">
            <div className="prose max-w-none dark:prose-invert prose-p:leading-5 prose-li:leading-5 prose-p:mb-1 prose-p:mt-1 prose-headings:text-muted-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary dark:prose-headings:text-muted-foreground dark:prose-p:text-muted-foreground dark:prose-li:text-muted-foreground dark:prose-a:text-primary prose-sm">
              <ReactMarkdown>{demoMarkdown}</ReactMarkdown>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-white/65 dark:bg-black/40 backdrop-blur p-4 md:p-6 shadow-glow">
            <AspectRatio ratio={16 / 9}>
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-primary opacity-35" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full border border-border bg-white/65 dark:bg-black/40 backdrop-blur" />
                    <p className="text-sm text-muted-foreground">Video placeholder</p>
                    <p className="text-xs text-muted-foreground/75">Drop your embed or file here</p>
                  </div>
                </div>
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2">
                  <div className="h-1 flex-1 rounded bg-muted/60">
                    <div className="h-1 w-1/5 rounded bg-primary" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-white/80 dark:bg-black/60 border border-border backdrop-blur" />
                </div>
              </div>
            </AspectRatio>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;

