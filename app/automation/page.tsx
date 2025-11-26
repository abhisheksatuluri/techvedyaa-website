import HeroVideo from '@/components/HeroVideo';
import WorkflowInfographic from '@/components/WorkflowInfographic';
import CTASection from '@/components/CTASection';

export default function AutomationPage() {
    return (
        <div className="flex flex-col gap-20 pb-20">
            <HeroVideo
                mp4="/videos/video_automation_hero_n8n.mp4"
                webm="/videos/video_automation_hero_n8n.webm"
                poster="/images/poster_automation_hero.webp"
            />

            <section className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-tv-offwhite mb-6">
                        Seamless <span className="text-tv-teal">Workflow Automation</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Eliminate manual bottlenecks. We design and deploy intelligent workflows that integrate your favorite tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-tv-offwhite mb-6">How We Automate</h2>
                        <p className="text-gray-400 mb-6">
                            Using platforms like n8n and custom Python scripts, we connect your CRM, Marketing, and Operations stacks into a unified, self-driving system.
                        </p>
                        <ul className="space-y-4">
                            {['Lead Generation & Qualification', 'Customer Onboarding', 'Invoice Processing', 'Social Media Scheduling'].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-tv-teal rounded-full mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-[400px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                        {/* Placeholder for a diagram or image */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                            [Automation Architecture Diagram]
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-tv-offwhite text-center mb-12">Our Process</h2>
                <WorkflowInfographic />
            </section>

            <CTASection
                title="Stop Wasting Time on Manual Tasks"
                subtitle="Let's build a custom automation solution for your business."
                buttonText="Get Started"
                link="/contact"
            />
        </div>
    );
}
