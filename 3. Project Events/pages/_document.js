import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <div id="overlays"></div> //to add content which is from outside of our app
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;