import Kady from '../assets/imgs/avatar-kady.jpg'
import Aiysha from '../assets/imgs/avatar-aiysha.jpg'
import Arthur from '../assets/imgs/avatar-arthur.jpg'
import Insults from '../assets/imgs/insults.png'

export function ReviewHome() {
    return (
        <section className="review-home">
            <h1 className='h1-review'>
                Delivering real results for top companies. Some of our <span>success stories.</span>
            </h1>
            <div className='review-container'>
                <div className="review">
                    <p className="p-review">
                        “The team perfectly fit the specialized skill set required. They focused on the most essential  features helping us launch the platform eight  months faster than planned.”
                    </p>
                    <h4 className="h4-review">
                        Kady Baker
                    </h4>
                    <p className="p-jobPosition">
                        Product Manager at Bookmark
                    </p>
                    <img src={Kady} alt="Kady Avatar" className='img-avatar' />
                </div>

                <div className="review">
                    <p className="p-review">
                        “We needed to automate our entire onboarding  process. The team came in and built out the  whole journey. Since going live, user retention has  gone tbrough the roof!”
                    </p>
                    <h4 className="h4-review">
                        Aiysha Reese
                    </h4>
                    <p className="p-jobPosition">
                        Founder of Manage
                    </p>
                    <img src={Aiysha} alt="Kady Avatar" className='img-avatar' />
                </div>

                <div className="review">
                    <p className="p-review">
                        “Amazing. Our team helped us build an app that  delivered a new experience for hiring a physio.  The launch was an instant success with 100k  downloads in the first month.”
                    </p>
                    <h4 className="h4-review">
                        Arthur Clarke
                    </h4>
                    <p className="p-jobPosition">
                        Co-founder of MyPhysio
                    </p>
                    <img src={Arthur} alt="Kady Avatar" className='img-avatar' />
                </div>
            </div>
        </section>
    )

}