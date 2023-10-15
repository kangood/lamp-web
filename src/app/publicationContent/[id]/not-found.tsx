import { LinkButton } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="flex justify-center mb-20">
            <div className="flex-col space-y-5">
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <LinkButton href="/">Return Home</LinkButton>
            </div>
        </div>
    );
}
