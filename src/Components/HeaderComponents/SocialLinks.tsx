import { TryHackMeIcon, CodewarsIcon } from '../icons/Icons';

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a href="https://twitter.com/ivanwritescode" target="_blank"><i className='bi bi-twitter'></i></a>
            <a href="https://github.com/ivanwritescode" target="_blank"><i className='bi bi-facebook'></i></a>
            <a href="https://linkedin.com/in/ivan-mejico" target="_blank"><i className='bi bi-linkedin'></i></a>
            <a href="https://tryhackme.com/p/Nemos" target="_blank"><TryHackMeIcon /></a>
            <a href="https://www.codewars.com/users/ivanwritescode" target="_blank"><CodewarsIcon /></a>
        </div>
    )
}

export default SocialLinks;