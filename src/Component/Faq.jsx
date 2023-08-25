import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "What to know more About our Beloved Imam Hussain",
    rows: [
        {
            title: "What was Imam Hussain known for?",
            content: `He is the third Imam of Shia Islam after his brother, Hasan, and before his son, Ali ibn Husayn Zayn al-Abidin. Being a grandson of the prophet, he is a member of the Ahl al-Bayt. He is also considered to be a member of the Ahl al-Kisa, and a participant in the event of Mubahala.
            `,
        },
        {
            title: "What prophet said about Imam Hussain?",
            content:
                "The Messenger of Allah said: He who loves al-Hasan and al-Husayn, loved me, and he who makes them angry has made me angry.",
        },
        {
            title: "Why is Imam Hussain a hero?",
            content: `Imam Hussain (as) was steadfast on the path of true Islam – the Islam that does not prioritize rulers or dynasties. His call for justice and unity of the ummah was central in all of actions, both on and off the battlefield `,
        },
        {
            title: "Why did Hussain sacrifice his life?",
            content: <p>Husayn's death at Karbala is believed by Shi'as to be a sacrifice made to prevent the corruption of Islam by tyrannical rulers and to protect its ideology. He is, as such, believed to have been fully aware of his fate and the outcome of his revolt, which was divinely ordained.</p>,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    fontFamily:'Champion Gothic',
    titleTextColor: "black",
    rowTitleColor: "black",
     titleTextSize: '8rem',
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "?",
    tabFocus: true,
    expandIcon: "+",
    collapseIcon: "-",
};


document.title="Know more about Imam Hussain"
export default function HussainFAQS() {

    return (
      <section className="container-fluid mt-5 pt-5">
    
        <div className="container mt-5 pt-5 mb-5">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>

        </section>
    );
}