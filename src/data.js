import desktop_1 from './assets/desktop-image-hero-1.jpg';
import desktop_2 from './assets/desktop-image-hero-2.jpg';
import desktop_3 from './assets/desktop-image-hero-3.jpg';

const data = [
{
	id: Math.round(Math.random(1000000) * 1000),
	image: desktop_1,
	title: 'Discover innovative ways to decorate',
	title_text: ` We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,

},
{
	id: Math.round(Math.random(1000000) * 1000),
	image: desktop_2,
	title: 'We are available all across the globe',
	title_text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
	
},
{
	id: Math.round(Math.random(1000000) * 1000),
	image: desktop_3,
	title: 'Manufactured with the best materials',
	title_text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry. we understand what customers.`,
	
}
]

export default data;