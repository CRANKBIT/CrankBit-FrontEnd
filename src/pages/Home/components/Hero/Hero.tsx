import {Link} from "react-router-dom"

const Hero = ()=>(
    <div className="text-center py-40">
        <img className="mx-auto" src="/heroImage.svg" alt="HeroImage" />
        <p className="text-4xl text-center mb-11">Unleash the Power of Mechanic:<br/>Elevate Your Reports to Perfection!</p>
        <Link className = "text-xl" to = "/auth/signup">Get started by creating an account for FREE!</Link>
    </div>
)

export default Hero