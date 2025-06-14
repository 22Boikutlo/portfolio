import Head from 'next/head';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Educations from '@/components/Educations';
import SkillsApi from '@/components/SkillsApi';
import ProjectApi from '@/components/ProjectApi';
import Footers from '@/components/Footers';



export default function Home() {
  return (
    <>
      <Head>
        <title>Boikutlo Shaun Rampora | Portfolio</title>
        <meta name="description" content="Portfolio website showcasing my skills, education, and projects." />
        <meta name="keywords" content="Software Developer, Portfolio" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Navbar />

      <main style={{ paddingTop: "80px" }}>
        <section id="aboutme"><About /></section>
        <section id="education"><Educations /></section>
        <section id="skills"><SkillsApi /></section>
        <section id="projects"><ProjectApi /></section>
        <section id="contact"><Footers /></section>
      </main>
    </>
  );
}

