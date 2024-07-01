import styles from "./Layout.module.css";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({children}: LayoutProps):JSX.Element {

    return (
        <div className={styles.layout}>{children}</div>
    )
}

export default Layout;