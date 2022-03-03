import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

function About() {
    const { t } = useTranslation();
    return <div>{t("common:title")}</div>;
}

export default About;
