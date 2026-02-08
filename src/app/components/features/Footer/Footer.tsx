import styles from './footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import paymentsIcons from '@/assets/paymentsIcons'

const iconPayments = paymentsIcons;

const icons = [
    {title:'applePay', svg: iconPayments.applePay },
    {title:'discover', svg: iconPayments.discover },
    {title:'mastercard', svg: iconPayments.mastercard },
    {title:'visa', svg: iconPayments.visa },
    {title:'secure payment', svg: iconPayments.securePayment },

]

export const Footer = () => {
    const menuItems = [
        {
            title: 'account',
            items: [
                {
                    label: 'my profile',
                    link: '/',
                },
                {
                    label: 'order history',
                    link: '/',
                },
                {
                    label: 'shoping cart',
                    link: '/',
                },
                {
                    label: 'shoping cart',
                    link: '/',
                },
                {
                    label: 'create account',
                    link: '/',
                }
            ]
        },
        {
            title: 'Helps',
            items: [
                {
                    label: 'contact',
                    link: '/',
                },
                {
                    label: 'faqs',
                    link: '/',
                },
                {
                    label: 'terms & condition',
                    link: '/',
                },
                {
                    label: 'privacy policy',
                    link: '/',
                },
            ]
        },
        {
            title: 'proxy',
            items: [
                {
                    label: 'about',
                    link: '/',
                },
                {
                    label: 'shop',
                    link: '/',
                },
                {
                    label: 'product',
                    link: '/',
                }
            ]
        },
        {
            title: 'categories',
            items: [
                {
                    label: 'fruit & vegetables',
                    link: '/',
                },
                {
                    label: 'meat & fish',
                    link: '/',
                },
                {
                    label: 'bread & bakery',
                    link: '/',
                },
            ]
        }

    ]
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h3>Ecobazar</h3>
                    <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                    <span>(219) 555-0114 or Proxy@gmail.com</span>
                </div>

                {
                    menuItems.map((category, index) => (
                        <div className={styles.link_column} key={index}>
                            <h4>{category.title}</h4>
                            {category.items.map((item, i) => (
                                <Link href={item.link} key={i}>{item.label}</Link>
                            ))}
                        </div>

                    ))
                }

            </div>
            <div className={styles.container}>
                <p>Ecobazar eCommerce & Kelly C. Santos © {new Date().getFullYear()}. All Rights Reserved</p>
                <span className={styles.paymentIcons}>
                    {icons.map((icon, index) => (
                        <Image src={icon.svg} width={45} height={30}  alt={icon.title}/>
                    ))}
                </span>
            </div>
        </footer>
    )
}