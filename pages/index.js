import Head from 'next/head';

const Index = () => (
    <div className={'index'}>
        <Head>
            <title>Thibaut Dutartre</title>
            <link rel="icon" type="image/png" href="static/favicon.png" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#04d0bb" />
            <meta
                name="Description"
                content="Thibaut Dutartre's personal website"
            />
        </Head>
        <picture>
            <source srcset="static/background-mobile.webp" type="image/webp" />
            <source srcset="static/background-mobile.jpg" type="image/jpeg" />
            <source
                media="(min-width: 480px)"
                srcset="static/background.webp"
                type="image/webp"
            />
            <source
                media="(min-width: 480px)"
                srcset="static/background.jpg"
                type="image/jpeg"
            />
            <img
                src="static/background.jpg"
                alt="New yorkers staring at their phone screen"
            />
        </picture>
        <main>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="475 122 611 190"
                className="name"
            >
                <path
                    fill-rule="evenodd"
                    d="M548.4 205.16c-.56-.56-.84-1.24-.84-2.04V137h-22.2c-.8 0-1.48-.28-2.04-.84-.56-.56-.84-1.28-.84-2.16v-9c0-.88.26-1.6.78-2.16s1.22-.84 2.1-.84h61.32c.88 0 1.6.28 2.16.84.56.56.84 1.28.84 2.16v9c0 .88-.28 1.6-.84 2.16-.56.56-1.28.84-2.16.84H564.6v66.12c0 .8-.26 1.48-.78 2.04s-1.22.84-2.1.84h-11.28c-.8 0-1.48-.28-2.04-.84zm54.24 0c-.56-.56-.84-1.24-.84-2.04V125c0-.88.26-1.6.78-2.16s1.22-.84 2.1-.84h11.04c.88 0 1.6.28 2.16.84.56.56.84 1.28.84 2.16v30.84h35.04V125c0-.88.28-1.6.84-2.16.56-.56 1.24-.84 2.04-.84h11.16c.88 0 1.58.28 2.1.84.52.56.78 1.28.78 2.16v78.12c0 .8-.26 1.48-.78 2.04s-1.22.84-2.1.84h-11.16c-.8 0-1.48-.28-2.04-.84-.56-.56-.84-1.24-.84-2.04v-32.04h-35.04v32.04c0 .8-.28 1.48-.84 2.04-.56.56-1.28.84-2.16.84h-11.04c-.8 0-1.48-.28-2.04-.84zm87.6 0c-.56-.56-.84-1.24-.84-2.04v-78.24c0-.88.28-1.58.84-2.1.56-.52 1.24-.78 2.04-.78h11.52c.88 0 1.58.26 2.1.78s.78 1.22.78 2.1v78.24c0 .8-.26 1.48-.78 2.04s-1.22.84-2.1.84h-11.52c-.8 0-1.48-.28-2.04-.84zm36 0c-.56-.56-.84-1.24-.84-2.04V125c0-.88.26-1.6.78-2.16s1.22-.84 2.1-.84h34.8c9.36 0 16.36 2.06 21 6.18 4.64 4.12 6.96 9.74 6.96 16.86 0 4.16-1.02 7.7-3.06 10.62-2.04 2.92-4.42 5.02-7.14 6.3 3.36 1.52 6.2 4 8.52 7.44 2.32 3.44 3.48 7.36 3.48 11.76 0 7.44-2.52 13.44-7.56 18-5.04 4.56-12.08 6.84-21.12 6.84h-35.88c-.8 0-1.48-.28-2.04-.84zm34.68-48.72c4.08 0 7.22-1 9.42-3s3.3-4.68 3.3-8.04c0-3.36-1.08-5.96-3.24-7.8-2.16-1.84-5.32-2.76-9.48-2.76h-18.6v21.6h18.6zm1.2 36.72c4.16 0 7.4-1.14 9.72-3.42 2.32-2.28 3.48-5.18 3.48-8.7 0-3.52-1.18-6.42-3.54-8.7-2.36-2.28-5.58-3.42-9.66-3.42h-19.8v24.24h19.8zm37.68 12.12c-.48-.48-.72-1.08-.72-1.8l.24-1.08 28.8-77.4c.8-2 2.24-3 4.32-3h13.2c2.08 0 3.52 1 4.32 3l28.8 77.4.24 1.08c0 .72-.26 1.32-.78 1.8s-1.1.72-1.74.72H865.8c-1.68 0-2.84-.76-3.48-2.28l-5.52-14.52h-35.52l-5.52 14.52c-.64 1.52-1.8 2.28-3.48 2.28H801.6c-.72 0-1.32-.24-1.8-.72zm25.68-30h27.12l-13.56-36.96-13.56 36.96zm71.04 23.64c-6-5.52-9-13.88-9-25.08V125c0-.88.26-1.6.78-2.16s1.22-.84 2.1-.84h11.04c.88 0 1.6.28 2.16.84.56.56.84 1.28.84 2.16v48.84c0 6.32 1.5 11.08 4.5 14.28 3 3.2 7.26 4.8 12.78 4.8s9.78-1.6 12.78-4.8c3-3.2 4.5-7.96 4.5-14.28V125c0-.88.28-1.6.84-2.16.56-.56 1.28-.84 2.16-.84h11.04c.88 0 1.58.28 2.1.84.52.56.78 1.28.78 2.16v48.84c0 11.2-2.98 19.56-8.94 25.08-5.96 5.52-14.34 8.28-25.14 8.28-10.88 0-19.32-2.76-25.32-8.28zm96.72 6.24c-.56-.56-.84-1.24-.84-2.04V137h-22.2c-.8 0-1.48-.28-2.04-.84-.56-.56-.84-1.28-.84-2.16v-9c0-.88.26-1.6.78-2.16s1.22-.84 2.1-.84h61.32c.88 0 1.6.28 2.16.84.56.56.84 1.28.84 2.16v9c0 .88-.28 1.6-.84 2.16-.56.56-1.28.84-2.16.84h-22.08v66.12c0 .8-.26 1.48-.78 2.04s-1.22.84-2.1.84h-11.28c-.8 0-1.48-.28-2.04-.84zm-517.32 104c-.56-.56-.84-1.24-.84-2.04V229c0-.88.26-1.6.78-2.16s1.22-.84 2.1-.84h29.28c23.6 0 35.64 10.88 36.12 32.64.16 4.64.24 7.76.24 9.36 0 1.52-.08 4.6-.24 9.24-.32 11.2-3.34 19.46-9.06 24.78-5.72 5.32-14.54 7.98-26.46 7.98h-29.88c-.8 0-1.48-.28-2.04-.84zm31.32-13.08c6.64 0 11.44-1.48 14.4-4.44 2.96-2.96 4.52-7.88 4.68-14.76.16-4.8.24-7.8.24-9 0-1.28-.08-4.24-.24-8.88-.16-6.56-1.8-11.38-4.92-14.46s-8.04-4.62-14.76-4.62H492v56.16h15.24zm60.48 6.84c-6-5.52-9-13.88-9-25.08V229c0-.88.26-1.6.78-2.16s1.22-.84 2.1-.84h11.04c.88 0 1.6.28 2.16.84.56.56.84 1.28.84 2.16v48.84c0 6.32 1.5 11.08 4.5 14.28 3 3.2 7.26 4.8 12.78 4.8s9.78-1.6 12.78-4.8c3-3.2 4.5-7.96 4.5-14.28V229c0-.88.28-1.6.84-2.16.56-.56 1.28-.84 2.16-.84h11.04c.88 0 1.58.28 2.1.84.52.56.78 1.28.78 2.16v48.84c0 11.2-2.98 19.56-8.94 25.08-5.96 5.52-14.34 8.28-25.14 8.28-10.88 0-19.32-2.76-25.32-8.28zm96.72 6.24c-.56-.56-.84-1.24-.84-2.04V241h-22.2c-.8 0-1.48-.28-2.04-.84-.56-.56-.84-1.28-.84-2.16v-9c0-.88.26-1.6.78-2.16s1.22-.84 2.1-.84h61.32c.88 0 1.6.28 2.16.84.56.56.84 1.28.84 2.16v9c0 .88-.28 1.6-.84 2.16-.56.56-1.28.84-2.16.84h-22.08v66.12c0 .8-.26 1.48-.78 2.04s-1.22.84-2.1.84h-11.28c-.8 0-1.48-.28-2.04-.84zm37.68.12c-.48-.48-.72-1.08-.72-1.8l.24-1.08 28.8-77.4c.8-2 2.24-3 4.32-3h13.2c2.08 0 3.52 1 4.32 3l28.8 77.4.24 1.08c0 .72-.26 1.32-.78 1.8s-1.1.72-1.74.72h-10.68c-1.68 0-2.84-.76-3.48-2.28l-5.52-14.52H723.6l-5.52 14.52c-.64 1.52-1.8 2.28-3.48 2.28h-10.68c-.72 0-1.32-.24-1.8-.72zm25.68-30h27.12l-13.56-36.96-13.56 36.96zm65.4 29.88c-.56-.56-.84-1.24-.84-2.04V229c0-.88.26-1.6.78-2.16s1.22-.84 2.1-.84h31.08c9.84 0 17.54 2.28 23.1 6.84 5.56 4.56 8.34 11.04 8.34 19.44 0 5.84-1.4 10.74-4.2 14.7-2.8 3.96-6.72 6.82-11.76 8.58l17.4 30.6c.24.48.36.92.36 1.32 0 .72-.26 1.32-.78 1.8s-1.1.72-1.74.72H846c-1.28 0-2.28-.3-3-.9-.72-.6-1.36-1.38-1.92-2.34l-15.36-28.44h-16.44v28.8c0 .8-.28 1.48-.84 2.04-.56.56-1.28.84-2.16.84h-11.04c-.8 0-1.48-.28-2.04-.84zm32.76-44.52c4.8 0 8.4-1.06 10.8-3.18 2.4-2.12 3.6-5.22 3.6-9.3 0-4.08-1.2-7.22-3.6-9.42-2.4-2.2-6-3.3-10.8-3.3h-16.68v25.2h16.68zm65.64 44.52c-.56-.56-.84-1.24-.84-2.04V241h-22.2c-.8 0-1.48-.28-2.04-.84-.56-.56-.84-1.28-.84-2.16v-9c0-.88.26-1.6.78-2.16s1.22-.84 2.1-.84h61.32c.88 0 1.6.28 2.16.84.56.56.84 1.28.84 2.16v9c0 .88-.28 1.6-.84 2.16-.56.56-1.28.84-2.16.84H907.8v66.12c0 .8-.26 1.48-.78 2.04s-1.22.84-2.1.84h-11.28c-.8 0-1.48-.28-2.04-.84zm54.24 0c-.56-.56-.84-1.24-.84-2.04V229c0-.88.26-1.6.78-2.16s1.22-.84 2.1-.84h31.08c9.84 0 17.54 2.28 23.1 6.84 5.56 4.56 8.34 11.04 8.34 19.44 0 5.84-1.4 10.74-4.2 14.7-2.8 3.96-6.72 6.82-11.76 8.58l17.4 30.6c.24.48.36.92.36 1.32 0 .72-.26 1.32-.78 1.8s-1.1.72-1.74.72h-11.04c-1.28 0-2.28-.3-3-.9-.72-.6-1.36-1.38-1.92-2.34l-15.36-28.44h-16.44v28.8c0 .8-.28 1.48-.84 2.04-.56.56-1.28.84-2.16.84h-11.04c-.8 0-1.48-.28-2.04-.84zm32.76-44.52c4.8 0 8.4-1.06 10.8-3.18 2.4-2.12 3.6-5.22 3.6-9.3 0-4.08-1.2-7.22-3.6-9.42-2.4-2.2-6-3.3-10.8-3.3h-16.68v25.2h16.68zm48.12 44.52c-.56-.56-.84-1.24-.84-2.04V229c0-.88.26-1.6.78-2.16s1.22-.84 2.1-.84h52.92c.88 0 1.6.28 2.16.84.56.56.84 1.28.84 2.16v8.04c0 .88-.28 1.58-.84 2.1-.56.52-1.28.78-2.16.78h-39.36v21h36.72c.88 0 1.6.28 2.16.84.56.56.84 1.28.84 2.16v7.56c0 .88-.28 1.58-.84 2.1-.56.52-1.28.78-2.16.78h-36.72v21.72h40.32c.88 0 1.6.26 2.16.78s.84 1.22.84 2.1v8.16c0 .88-.28 1.58-.84 2.1-.56.52-1.28.78-2.16.78h-53.88c-.8 0-1.48-.28-2.04-.84z"
                />
            </svg>
            <div className="links">
                <a href="https://www.instagram.com/thib_thib/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 18"
                        className="icon"
                        alt="Instagram logo"
                    >
                        <path d="M17.946 5.29a6.606 6.606 0 0 0-.418-2.185 4.412 4.412 0 0 0-1.04-1.594A4.412 4.412 0 0 0 14.896.474a6.606 6.606 0 0 0-2.186-.42C11.75.01 11.445 0 9 0S6.25.01 5.29.054a6.606 6.606 0 0 0-2.185.418 4.412 4.412 0 0 0-1.594 1.04A4.412 4.412 0 0 0 .474 3.104a6.606 6.606 0 0 0-.42 2.186C.01 6.25 0 6.555 0 9s.01 2.75.054 3.71a6.606 6.606 0 0 0 .418 2.185 4.412 4.412 0 0 0 1.04 1.594 4.41 4.41 0 0 0 1.593 1.037 6.606 6.606 0 0 0 2.184.418C6.25 17.99 6.554 18 9 18s2.75-.01 3.71-.054a6.606 6.606 0 0 0 2.185-.418 4.602 4.602 0 0 0 2.633-2.633 6.606 6.606 0 0 0 .418-2.184C17.99 11.75 18 11.446 18 9s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 0 1-.31 1.67 2.98 2.98 0 0 1-1.708 1.71 4.98 4.98 0 0 1-1.67.31c-.95.042-1.235.05-3.638.05s-2.688-.008-3.637-.05a4.98 4.98 0 0 1-1.67-.31 2.788 2.788 0 0 1-1.036-.674 2.788 2.788 0 0 1-.673-1.035 4.978 4.978 0 0 1-.31-1.67c-.043-.95-.052-1.235-.052-3.638s.01-2.688.052-3.637a4.98 4.98 0 0 1 .31-1.67 2.788 2.788 0 0 1 .673-1.036 2.788 2.788 0 0 1 1.035-.673 4.98 4.98 0 0 1 1.67-.31c.95-.043 1.235-.052 3.638-.052s2.688.01 3.637.052a4.98 4.98 0 0 1 1.67.31 2.788 2.788 0 0 1 1.036.673 2.788 2.788 0 0 1 .673 1.035 4.98 4.98 0 0 1 .31 1.67c.043.95.052 1.235.052 3.638s-.01 2.688-.052 3.637zM9 4.377A4.622 4.622 0 1 0 13.622 9 4.622 4.622 0 0 0 9 4.378zM9 12a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm5.884-7.804a1.08 1.08 0 1 1-1.08-1.08 1.08 1.08 0 0 1 1.08 1.08z" />
                    </svg>
                </a>
                <a href="https://github.com/thibthib">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33 33"
                        className="icon"
                        alt="Github logo"
                    >
                        <path d="M16.319.455c-8.834 0-15.999 7.345-15.999 16.405 0 7.248 4.584 13.396 10.942 15.566.801.151 1.092-.356 1.092-.791l-.022-2.79c-4.45.991-5.389-2.199-5.389-2.199-.728-1.895-1.777-2.4-1.777-2.4-1.453-1.017.11-.997.11-.997 1.606.116 2.451 1.691 2.451 1.691 1.427 2.507 3.745 1.783 4.657 1.363.145-1.059.559-1.783 1.016-2.192-3.553-.414-7.288-1.822-7.288-8.108 0-1.791.624-3.256 1.647-4.402-.165-.415-.714-2.084.157-4.342 0 0 1.343-.441 4.399 1.682 1.276-.365 2.645-.546 4.006-.553 1.359.007 2.728.188 4.006.553 3.055-2.123 4.395-1.682 4.395-1.682.873 2.258.324 3.927.16 4.342 1.025 1.146 1.644 2.611 1.644 4.402 0 6.302-3.741 7.689-7.305 8.095.574.507 1.085 1.508 1.085 3.038 0 2.192-.02 3.962-.02 4.5 0 .439.289.95 1.1.79 6.353-2.174 10.933-8.319 10.933-15.565 0-9.061-7.164-16.405-16.001-16.405" />
                    </svg>
                </a>
                <a href="https://twitter.com/thib_thib">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 28"
                        className="icon"
                        alt="Twitter logo"
                    >
                        <path d="M10.078 28c-3.713 0-7.169-1.129-10.078-3.065.514.063 1.038.095 1.568.095 3.08 0 5.915-1.091 8.165-2.92-2.877-.055-5.305-2.027-6.142-4.738.401.08.813.122 1.237.122.6 0 1.18-.083 1.732-.239-3.008-.627-5.274-3.384-5.274-6.689v-.086c.887.511 1.9.818 2.978.853-1.764-1.223-2.925-3.311-2.925-5.678 0-1.25.324-2.422.89-3.429 3.243 4.127 8.087 6.843 13.551 7.127-.112-.499-.17-1.02-.17-1.555 0-3.767 2.944-6.822 6.575-6.822 1.891 0 3.6.828 4.799 2.154 1.498-.306 2.905-.874 4.175-1.655-.491 1.593-1.533 2.93-2.891 3.774 1.33-.165 2.597-.532 3.776-1.074-.881 1.368-1.996 2.57-3.281 3.531.013.292.019.587.019.882 0 9.014-6.613 19.409-18.706 19.409" />
                    </svg>
                </a>
                <a href="mailto:t.dutartre@gmail.com">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                        className="icon"
                        alt="Email logo"
                    >
                        <path d="M28.562 1.172c.33.234.485.61.422 1l-4 24c-.046.297-.234.547-.5.703-.14.078-.312.125-.484.125-.125 0-.25-.03-.375-.078l-7.078-2.89-3.78 4.61c-.19.233-.47.358-.767.358-.11 0-.234-.016-.344-.063-.39-.14-.656-.515-.656-.937v-5.453L24.5 6 7.797 20.453l-6.172-2.53c-.36-.142-.594-.47-.625-.86-.016-.376.172-.735.5-.922l26-15c.156-.092.328-.14.5-.14.203 0 .406.063.563.173z" />
                    </svg>
                </a>
            </div>
        </main>
        <style global jsx>{`
            body {
                margin: 0;
            }
        `}</style>
        <style jsx>
            {`
                img,
                source {
                    object-fit: cover;
                    height: 100vh;
                    width: 100vw;
                }

                main {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 80%;
                    transform: translate(-50%, -50%);
                    mix-blend-mode: hard-light;
                    text-align: center;
                }

                @media (min-width: 480px) {
                    main {
                        width: 40%;
                    }
                }

                .name {
                    fill: #04d0bb;
                }

                .links {
                    margin-top: 48px;
                    display: flex;
                }

                a {
                    flex: 1;
                    text-align: center;
                }

                .icon {
                    fill: #04d0bb;
                    width: 48px;
                    height: 48px;
                }
            `}
        </style>
    </div>
);

export default Index;
