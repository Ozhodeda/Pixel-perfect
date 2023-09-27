import { ExplainHome } from "../cmp/ExplainHome";
import { MainHome } from "../cmp/MainHome";
import { ReviewHome } from "../cmp/ReviewHome";

export function HomePage() {
    return (
        <section className='home-section'>
            <MainHome />
            <ExplainHome />
            <ReviewHome />
        </section >
    )
}