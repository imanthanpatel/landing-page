import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, ChevronDown, FileText } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

// Image URLs
const drbose = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068727/sanjukta_bose_k4tfew.jpg";
const drmadhukumar = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068629/drmadhukumar_o8pfhu.jpg";
const drprajapati = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drprajapati_ypczef.jpg";
const mrgrsinha = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068647/mr_grsinha_bhbmg4.jpg";
const mrali = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068651/mrali_cardsj.jpg";
const mranupam = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068652/mranupam_pohuly.jpg";
const mrbhavesh = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068654/mrbhavesh_yonp29.jpg";
const mrbimal = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068655/mrbimal_d4r8h2.jpg";
const mrhemal = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068656/mrhemal_fzbb5p.jpg";
const mrhemant = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068642/hemantsir_irkbsj.jpg";
const mrkiran = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068658/mrkiran_wpigss.jpg";
const mrnilesh = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068660/mrnirav_iqrfx1.jpg";
const mrnirav = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068660/mrnirav_iqrfx1.jpg";
const mrpanchal = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068661/mrpanchal_g3v5ku.jpg";
const mrpktaneja = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068724/pk_taneja_pq9i2q.jpg";
const mrpujan = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068661/mrpujan_ov7rvt.jpg";
const ramanan = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068665/mrramanan_t90lph.jpg";
const mrravin = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068666/mrravin_zsrq5f.jpg";
const mrshankar = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068680/mrshankar_d8pvxh.jpg";
const mrutkarsh = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068716/mrutkarsh_t4mamo.jpg";
const msmagare = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068718/msmagare_ocjvny.jpg";
const mspoyni = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068719/mspoyni_bpxhog.jpg";
const msswati = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068721/msswati_yw12e4.jpg";
const drTrivedi = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068632/drTrivedi_efxgjx.jpg";
const devjaniBanerjee = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068624/devjaniBanerjee_tlo8oe.jpg";
const chetnaParmar = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068619/chetnaParmar_yfnx5c.jpg";
const mosamPatel = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068646/mosamPatel_luof6n.jpg";
const artiBhadoria = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068734/artiBhadoria_xqz49x.jpg";
const parinKanaiya = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068723/parinKanaiya_ncss5w.jpg";
const swatiSaxena = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068730/swatiSaxena_int6i1.jpg";
const artiHansda = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068735/artiHansda_gv8r2e.jpg";
const akashDadhania = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068732/akash_dadhania_frz2do.jpg";
const amitPatel = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068733/amitPatel_itsz5t.jpg";
const anantAcharya = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068733/anantAcharya_pdpleu.jpg";
const ashishKumar = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068735/ashishKumar_xpeop2.jpg";
const ashutoshTewari = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068736/ashutoshTewari_qjytum.jpg";
const ashwinParikh = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068737/ashwinParikh_pvlsbh.jpg";
const bhaveshChelani = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068737/bhaveshChelani_raywik.jpg";
const bhaveshKothari = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068738/bhaveshKothari_ibrrho.jpg";
const Bhavik = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068739/Bhavik_tlzsaf.jpg";
const BHAVIK_BHANSALI = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068741/BHAVIK_BHANSALI_cdzcjl.jpg";
const brijeshGarala = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068741/brijeshGarala_ymszsa.jpg";
const chintanPopat = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068621/chintanPopat_vyngwy.jpg";
const devangPatel = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068622/devangPatel_nqxnwm.jpg";
const deveshChawla = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068623/deveshChawla_e931vr.jpg";
const dhruvNath = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068626/dhruvNath_ba3e2w.jpg";
const Heena = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068632/Heena_cgb9ch.jpg";
const HITESH_PORWAL = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068633/HITESH_PORWAL_u14kdn.jpg";
const javidShaikh = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068636/javidShaikh_w5rso1.jpg";
const jekishanParmar = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068637/jekishanParmar_qruizp.jpg";
const jitendraJain = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068638/jitendraJain_oruign.jpg";
const kalpeshShah = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068639/kalpeshShah_joqjhn.jpg";
const karanShah = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068641/karanShah_kq4vvj.jpg";
const karmjitsinhBihola = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068643/karmjitsinhBihola_tonpdi.jpg";
const kavitaSaxena = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068644/kavitaSaxena_dzfbg1.jpg";
const manojShukla = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068644/manojShukla_kdobmf.jpg";
const nileshVaghela = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068722/nileshVaghela_hfv68d.jpg";
const PRAKASH_VAGHASIYA = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068725/PRAKASH_VAGHASIYA_dils92.jpg";
const rupeshShah = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068726/rupeshShah_odommw.jpg";
const saurabhJain = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068728/saurabhJain_qbia4b.jpg";
const sudhirGupta = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068729/sudhirGupta_ozqefj.jpg";
const sureshOthayoth = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068730/sureshOthayoth_nrjh3x.jpg";
const krish = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068650/krish_ibj5de.jpg";
const foram = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068646/foram_msehlq.jpg";
const kartavi = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068648/kartavi_pxkpla.jpg";
const chandraveer = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068618/chandraveer_ikxedq.png";
const chaitali = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068742/chaitalikarpe_qp8mqs.jpg";
const chhaya = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068620/ChhayaRaundal_n8di4m.jpg";
const drchandra = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068627/drchandra_lrl3it.jpg";
const drnilesh = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drnilesh_o3ikuu.jpg";
const drrahul = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068631/drrahul_lhskon.jpg";
const drmihir = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068629/drmihir_eh0zjh.jpg";
const drjignesh = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068628/drjignesh_kdyj4f.jpg";
const ishika = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068634/IshikaPatel_bdyaum.jpg";
const Abidhusain = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068649/MrAbidhusain_q28i3r.jpg";
const mranup = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068652/mranup_jicdrs.jpg";
const pranjal = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068726/pranjal_tbznpe.png";
const Charmi = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068718/MsCharmi_jg7rq3.jpg";
const soham = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068729/Soham_vuqlss.png";
const vedantratna = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068731/Vedantratna_cilhhc.jpg";
const devanshi = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743075961/WhatsApp_Image_2025-03-27_at_17.14.31_67532fc6_vevmxd.jpg";
const dhru_verma = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068625/dhruvVerma_ihfx6k.jpg";

// Define types for team members
type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
  resumeLink?: string;
  bio?: string;
};

type TeamCategory = {
  id: string;
  name: string;
  members: TeamMember[];
};

const TeamCarousel = () => {
  const isMobile = useIsMobile();
  const [activeTeam, setActiveTeam] = useState("our-team");
  const [isOpen, setIsOpen] = useState(false);

  // Team data
  const [teamCategories] = useState<TeamCategory[]>([
    {
      id: "our-team",
      name: "Our Team",
      members: [
        {
          id: 1,
          name: "Mr. Bimal Bhayani",
          position: "CEO, GUIITAR",
          image: mrbimal,
          resumeLink: "https://drive.google.com/file/d/112CsLKNyusAz_DtrbrzGrpJc4odCcuKw/",
        },
        {
          id: 2,
          name: "Mr. KiranKumar Parmar",
          position: "Sr. Manager",
          image: mrkiran,
          resumeLink: "https://drive.google.com/file/d/1ElxEwweEeZeroWkqfCd6RtrPqxKo5ZK-/",
        },
        {
          id: 3,
          name: "Dr. Nilesh Bhadure",
          position: "Professor",
          image: drnilesh,
          resumeLink: "https://drive.google.com/file/d/1isIJeartTJQp5yJwirfFRPKvlNifryRJ/",
        },
        {
          id: 4,
          name: "Mr. Akhilesh Prajapati",
          position: "Sr. Assistant Professor",
          image: drprajapati,
          resumeLink: "https://drive.google.com/file/d/1Br9gUAJ1BXvaTveLrCcnPlYRREHgGRb2/",
        },
        {
          id: 5,
          name: "Dr. Mihir Trivedi",
          position: "Sr. Assistant Professor",
          image: drmihir,
          resumeLink: "https://drive.google.com/file/d/12wxMOWeDQjf1SQQp38XM9Arv9U0YghSp/",
        },
        {
          id: 6,
          name: "Dr. Chandra Has",
          position: "Assistant Professor",
          image: drchandra,
          resumeLink: "https://drive.google.com/file/d/19uPcJ5kAL6r1YaAw6_Iyfy679Zeb1zQu/",
        },
        {
          id: 7,
          name: "Dr. Jignesh Valand",
          position: "Assistant Professor",
          image: drjignesh,
          resumeLink: "",
        },
        {
          id: 8,
          name: "Dr. Rahul Sharma",
          position: "Assistant Professor",
          image: drrahul,
          resumeLink: "",
        },
        {
          id: 9,
          name: "Mr. Abidhusain Lodha",
          position: "Assistant Professor",
          image: Abidhusain,
          resumeLink: "",
        },
        {
          id: 10,
          name: "Ms. Charmi Mehta",
          position: "Assistant Professor",
          image: Charmi,
          resumeLink: "",
        },
        {
          id: 11,
          name: "Shri Anup Upadhaya",
          position: "Lab Assistant",
          image: mranup,
          resumeLink: "https://drive.google.com/file/d/1LosN0oHzTspRaGwY-gN3g9lKCL7q5j_u/view?usp=sharing",
        },
        {
          id: 12,
          name: "Ms. Chaitali Karpe",
          position: "Lab Assistant",
          image: chaitali,
          resumeLink: "https://drive.google.com/file/d/1T1B5vGOpiyn9s9fX-FrMLQjIAFpOlmeM/view?usp=sharing",
        },
        {
          id: 13,
          name: "Mr. Hemant Rajpoot",
          position: "IT Coordinator",
          image: mrhemant,
          resumeLink: "https://drive.google.com/file/d/1j3pqIx6TDc_rbHZG58SqJEfE9S_MbTyY/view?usp=sharing",
        },
      ],
    },
    {
      id: "bod",
      name: "Board of Directors",
      members: [
        {
          id: 1,
          name: "Shri P. K. Taneja, IAS (Retd.)",
          position: "Chairman",
          image: mrpktaneja,
          resumeLink: "https://drive.google.com/file/d/19leo-CdgJGIbK21nzL5gi4-j6Th2SJnf/view?usp=sharing",
        },
        {
          id: 2,
          name: "Dr. G. R. Sinha",
          position: "Director",
          image: mrgrsinha,
          resumeLink: "https://drive.google.com/file/d/1SXjUbqVrwRuJtDcSR1ulK9BG3tIq_x7e/view?usp=sharing",
        },
        {
          id: 3,
          name: "Shri Ramesh Panchal",
          position: "Director",
          image: mrpanchal,
          resumeLink: "https://drive.google.com/file/d/1GFGH8JrCwt9r891zWTe09EbZ582IsCPw/view?usp=sharing",
        },
        {
          id: 4,
          name: "Mr. Bimal Bhayani",
          position: "Director & CEO",
          image: mrbimal,
          resumeLink: "https://drive.google.com/file/d/1ATHFSVbUNnHvcH-PORVVjdW4kIpm5IUL/view?usp=sharing",
        },
        {
          id: 5,
          name: "Dr. Pujan Vaishnav",
          position: "Director",
          image: mrpujan,
          resumeLink: "https://drive.google.com/file/d/1eK7502orqHyc0hbFHZVwbK-AjK-A42xo/view?usp=drive_link",
        },
        {
          id: 6,
          name: "Shri Utkarsh Yajnik",
          position: "Director",
          image: mrutkarsh,
          resumeLink: "https://drive.google.com/file/d/181rcISoVdjwOkNiMyH3BUy0q87IT6ky_/view?usp=drive_link",
        },
        {
          id: 7,
          name: "Shri Ravin Sanghavi",
          position: "Director",
          image: mrravin,
          resumeLink: "https://drive.google.com/file/d/1jt9oDu-DKihnSx8JThanmrfrZnX8CxY4/view?usp=drive_link",
        },
        {
          id: 8,
          name: "Mrs. Swati Bedekar",
          position: "Director",
          image: msswati,
          resumeLink: "https://drive.google.com/file/d/1C-xPhamxA2bZvjqFWPaQPmdIDXhqgJKA/view?usp=drive_link",
        },
      ],
    },
    {
      id: "advisory",
      name: "Advisory Board",
      members: [
        {
          id: 1,
          name: "Mr. Bimal Bhayani",
          position: "CEO & Advisor",
          image: mrbimal,
          resumeLink: "https://drive.google.com/file/d/112CsLKNyusAz_DtrbrzGrpJc4odCcuKw/view?usp=drive_link",
        },
        {
          id: 2,
          name: "Dr. G R Sinha",
          position: "Director & Advisor",
          image: mrgrsinha,
          resumeLink: "https://drive.google.com/file/d/1D25qxtb4duKHXe2OXh9c1KaTlOZtegeM/view?usp=drive_link",
        },
        {
          id: 3,
          name: "Dr. Madhukumar Mehta",
          position: "Advisor",
          image: drmadhukumar,
          resumeLink: "https://drive.google.com/file/d/1TLGCNmJ-5l200UdUDf97CXYndlspTUUZ/view?usp=drive_link",
        },
        {
          id: 4,
          name: "Mr. Ramanan Ramanathan",
          position: "Advisor",
          image: ramanan,
          resumeLink: "https://drive.google.com/file/d/16STS2iKqGGcaUzEtHfY_fYdvWIASZMgw/view?usp=drive_link",
        },
        {
          id: 5,
          name: "Mr. Anupam Jatole",
          position: "Advisor",
          image: mranupam,
          resumeLink: "https://drive.google.com/file/d/14CTQ1re-FYTLSavteSPDZeNpSFD85xhQ/view?usp=sharing",
        },
        {
          id: 6,
          name: "Mr. Hemal Patel",
          position: "Advisor",
          image: mrhemal,
          resumeLink: "https://drive.google.com/file/d/181dBRXhs5jd_gJCfxN6SAmlRyH4IiNWG/view?usp=sharing",
        },
        {
          id: 7,
          name: "Mr. Shankar C Rele",
          position: "Advisor",
          image: mrshankar,
          resumeLink: "https://drive.google.com/file/d/1fgdUmTy9v5aHHtlFkwVQwA2BPHTWUpAw/view?usp=sharing",
        },
        {
          id: 8,
          name: "Dr. Nilesh Khare",
          position: "Advisor",
          image: mrnilesh,
          resumeLink: "https://drive.google.com/file/d/1Qnj1kWneo7hyZHwT9ltsvKUaV6vhpnfz/view?usp=drive_link",
        },
        {
          id: 9,
          name: "Ms. Poyni Bhatt",
          position: "Advisor",
          image: mspoyni,
          resumeLink: "https://drive.google.com/file/d/1BTs1MGyeIdLx4OB9DebVBPKOpLbKunTN/view?usp=drive_link",
        },
        {
          id: 10,
          name: "Mr. Bhavesh Chelani",
          position: "Advisor",
          image: mrbhavesh,
          resumeLink: "https://drive.google.com/file/d/1cthr78T5xMwFCGP7YnoPjvaOGCdJzUmC/view?usp=drive_link",
        },
        {
          id: 11,
          name: "Mr. Nirav D Shah",
          position: "Advisor",
          image: mrnirav,
          resumeLink: "https://drive.google.com/file/d/1ovlOr2LVEmLbqmK8-H2JtIt0A2ONA3Kt/view?usp=drive_link",
        },
        {
          id: 12,
          name: "Mr. Azam Ali Khan",
          position: "Advisor",
          image: mrali,
          resumeLink: "https://drive.google.com/file/d/1KSPaeV-Z0MIujKIvjaeJfZEw6CFvEhld/view?usp=drive_link",
        },
        {
          id: 13,
          name: "Mr. Ramesh Panchal",
          position: "Advisor",
          image: mrpanchal,
          resumeLink: "https://drive.google.com/file/d/1eE5UNunlx5bNjlooxSEuiCjlhdBZA9xI/view?usp=drive_link",
        },
      ],
    },
    {
      id: "faculty",
      name: "Faculty Mentor",
      members: [
        {
          id: 1,
          name: "Dr. Sanjukta Bose Goswami",
          position: "Dean, SOT",
          image: drbose,
          resumeLink: "https://drive.google.com/file/d/1oUzPVx2ZyouUqacRfDDSeRTkqsBJQBIH/view?usp=sharing",
        },
        {
          id: 2,
          name: "Dr. Bharti Trivedi",
          position: "Visiting Professor",
          image: drTrivedi,
          resumeLink: "https://drive.google.com/file/d/1A2q3HkyB8UPMfXCWcSFfjG1ob5zg_cuw/view?usp=sharing",
        },
        {
          id: 3,
          name: "Ms. Archana Magare",
          position: "Program Coordinator, CSE",
          image: msmagare,
          resumeLink: "https://drive.google.com/file/d/18SrHuomt-nJXyOCr2BOz1R67WOEq79_G/view?usp=sharing",
        },
        {
          id: 4,
          name: "Ms. Patel Mosam",
          position: "Program Coordinator, CSE",
          image: mosamPatel,
          resumeLink: "https://drive.google.com/file/d/1118j5nUZCXwib9PAQWEX6-QhY64eu3Ns/view?usp=sharing",
        },
        {
          id: 5,
          name: "Dr. Akhilesh Prajapati",
          position: "Sr. Assistant Professor",
          image: drprajapati,
          resumeLink: "https://drive.google.com/file/d/113w46kL1amfBIjEpStdAj6quOW4KLrnh/view?usp=sharing",
        },
        {
          id: 6,
          name: "Dr. Devjani Banerjee",
          position: "Assistant Professor",
          image: devjaniBanerjee,
          resumeLink: "https://drive.google.com/file/d/17lLS0KlbIGr7IQusyJjNAVBFGrDWFkwm/view?usp=sharing",
        },
        {
          id: 7,
          name: "Dr. Chetna Parmar",
          position: "Associate Dean",
          image: chetnaParmar,
          resumeLink: "https://drive.google.com/file/d/1FwSxe7Wzou8lnaDJ-_tCtX5Ud0f0mA6T/view?usp=sharing",
        },
        {
          id: 8,
          name: "Dr. Arti Bhadoria",
          position: "Assistant Professor",
          image: artiBhadoria,
          resumeLink: "https://drive.google.com/file/d/1x0fC1FwVlDKEQnWv0z7OVVk8Itl68_f4/view?usp=sharing",
        },
        {
          id: 9,
          name: "Dr. Parin Kanaiya",
          position: "Assistant Professor",
          image: parinKanaiya,
          resumeLink: "https://drive.google.com/file/d/1-3OHEchNo4efjv6bmnDpNFqruRnjSuqK/view?usp=sharing",
        },
        {
          id: 10,
          name: "Ms. Swati Saxena",
          position: "Assistant Professor",
          image: swatiSaxena,
          resumeLink: "https://drive.google.com/file/d/1vBzRUcKz506cpJu0lbzZvK5-EfGo3gZa/view?usp=sharing",
        },
        {
          id: 11,
          name: "Dr. Arti Hansda",
          position: "Assistant Professor",
          image: artiHansda,
          resumeLink: "https://drive.google.com/file/d/1xHbWbvWJ3q3gKB5k3tLhFnKaIxlKByas/view?usp=sharing",
        },
      ],
    },
    {
      id: "industry",
      name: "Industrial Mentor",
      members: [
        {
          id: 1,
          name: "Mr. Rupesh Shah",
          position: "CEO, Barodaweb",
          image: rupeshShah,
          resumeLink: "https://drive.google.com/file/d/1gDR1HkvgLwi00oeI1p18gZbH5uUyqmiG/view?usp=sharing",
        },
        {
          id: 2,
          name: "Mr. Sudhir Gupta",
          position: "Member Strategic Advisory Board, Millennium Alliance",
          image: sudhirGupta,
          resumeLink: "https://drive.google.com/file/d/1lcGUw_iv5QV_26Ws1Yw8L90m7xfyRwli/view?usp=sharing",
        },
        {
          id: 3,
          name: "Prof Dhruv Nath",
          position: "Director, Lead Angels Network",
          image: dhruvNath,
          resumeLink: "https://drive.google.com/file/d/1Xc4elkNejWYzfkdsWpvp1gzy5xeO7rZV/view?usp=sharing",
        },
        {
          id: 4,
          name: "Mr. Ravin Sanghavi",
          position: "Founder, Ravin Sanghavi & Associates",
          image: mrravin,
          resumeLink: "https://drive.google.com/file/d/1buZ3lzvPBI4KuKT5ePXjW73I85Ua8MRW/view?usp=sharing",
        },
        {
          id: 5,
          name: "Dr. Manoj Shukla",
          position: "CEO, Gurukul Academy",
          image: manojShukla,
          resumeLink: "https://drive.google.com/file/d/1_gRfG0ArnfrgmEoFvciyp1mf97oEK-R7/view?usp=sharing",
        },
        {
          id: 6,
          name: "Kalpesh Shah",
          position: "Director, Market Creators Ltd",
          image: kalpeshShah,
          resumeLink: "https://drive.google.com/file/d/12lHXezQ2B8cWsozcIfHbj8Uyuh1Mnk6C/view?usp=sharing",
        },
        {
          id: 7,
          name: "Mr. Hitesh Porwal",
          position: "Founder, BIZSTART",
          image: HITESH_PORWAL,
          resumeLink: "https://drive.google.com/file/d/1Ghm7j6Aank9BTTqNoPDz0xPSGwfnjYtz/view?usp=sharing",
        },
        {
          id: 8,
          name: "Mr. Bhavesh Kothari",
          position: "Founder Director, Millennium Divas Pvt Ltd",
          image: bhaveshKothari,
          resumeLink: "https://drive.google.com/file/d/17ffQE3p6HXSjGNKmHSEPAEGzbj5LPJPv/view?usp=sharing",
        },
        {
          id: 9,
          name: "Adv. Bhavik B Patel",
          position: "CEO, INFINVENT IP",
          image: Bhavik,
          resumeLink: "https://drive.google.com/file/d/1Lzqfwid7roX6WrtQRodrzl1YFIeiJ0VV/view?usp=sharing",
        },
        {
          id: 10,
          name: "Mr. Brijesh M Garala",
          position: "Director, Oviyan Cast & Forge Pvt. Ltd.",
          image: brijeshGarala,
          resumeLink: "https://drive.google.com/file/d/14EZFKx8KV_cJXYEOtYqvif8IWw_aXJDL/view?usp=sharing",
        },
        {
          id: 11,
          name: "Mr. Bhavesh Chelani",
          position: "MD & CEO, Santushti Shakes Pvt. Ltd.",
          image: bhaveshChelani,
          resumeLink: "https://drive.google.com/file/d/1M-Y3RraBCfMLoh1fLKkGSUlXCD1zqI4_/view?usp=sharing",
        },
        {
          id: 12,
          name: "Mr. Saurabh Jain",
          position: "Founder, FUN2DO Labs Pvt. Ltd.",
          image: saurabhJain,
          resumeLink: "https://drive.google.com/file/d/19dmD6O2djzWMpLjt6uQMpQujBGTNgP8z/view?usp=sharing",
        },
        {
          id: 13,
          name: "Dr. Kavita Saxena",
          position: "Freelancer, Freelancing Startup mentor",
          image: kavitaSaxena,
          resumeLink: "https://drive.google.com/file/d/1IKCwwhE4ABIcHe5I134-KJztuU0TI1IM/view?usp=sharing",
        },
        {
          id: 14,
          name: "Dr. Suresh P Othayoth",
          position: "Manager - Research, GSFC Ltd.",
          image: sureshOthayoth,
          resumeLink: "https://drive.google.com/file/d/1Azn_SAlQllptbGpXVMGylr9UIV7UQFdg/view?usp=sharing",
        },
        {
          id: 15,
          name: "Mr. Ashutosh Tewari",
          position: "Senior Venture Coach, GITAM (deemed to be) University",
          image: ashutoshTewari,
          resumeLink: "https://drive.google.com/file/d/12Ny8kNha6UslxYB3LCJ4qMn7PocIAVSp/view?usp=sharing",
        },
        {
          id: 16,
          name: "CA CS Chintan Popat",
          position: "CA CS - FOUNDER, CA Chintan Popat & Associates",
          image: chintanPopat,
          resumeLink: "https://drive.google.com/file/d/109FOpZyhXr8ISppZnsG_XpISwwEcvVPR/view?usp=sharing",
        },
        {
          id: 17,
          name: "Mr. Devesh Chawla",
          position: "Founder & CEO, Chatur Ideas",
          image: deveshChawla,
          resumeLink: "https://drive.google.com/file/d/1ZBYCdGXvn3m1byMTxBltETJcE6k5GtMj/view?usp=sharing",
        },
        {
          id: 18,
          name: "Mr. Ashwin V. Parikh",
          position: "Director, International Business Development (IBD)",
          image: ashwinParikh,
          resumeLink: "https://drive.google.com/file/d/1s9mst6_51eWPtcRjPFMuQKAbwHHZCvMR/view?usp=sharing",
        },
        {
          id: 19,
          name: "Mr. Jekishan K Parmar",
          position: "Head of Sales & Technology, Aver India Equipment",
          image: jekishanParmar,
          resumeLink: "https://drive.google.com/file/d/1F_tQegSFZcVim7xi3nwr5UL6Vo3UCdzj/view?usp=sharing",
        },
        {
          id: 20,
          name: "Mr. Amitkumar Patel",
          position: "Managing Director, PATactual IP Law Services LLP",
          image: amitPatel,
          resumeLink: "https://drive.google.com/file/d/1Bnnp0wRZ9uec637ZvGwypIrpWDzolHZi/view?usp=sharing",
        },
        {
          id: 21,
          name: "Mr. Karan Shah",
          position: "Head - Partnership & Outreach, Civitas Sustainability Foundation",
          image: karanShah,
          resumeLink: "https://drive.google.com/file/d/1ejVLhVI4mhVfG1GbYK84rKBIEo6ynQNS/view?usp=sharing",
        },
        {
          id: 22,
          name: "Mr. Devang Patel",
          position: "Founder, Vantage Point Executive Coaching",
          image: devangPatel,
          resumeLink: "https://drive.google.com/file/d/1v2J70FPeCtw3Et-1Ni4cEdjAAdIrf5T_/view?usp=sharing",
        },
        {
          id: 23,
          name: "Mr. Prakash Vaghasiya",
          position: "CEO, Vise Organic",
          image: PRAKASH_VAGHASIYA,
          resumeLink: "https://drive.google.com/file/d/1Cw8fFm7AZGInc6GIriNr30lqv9Cx-yCJ/view?usp=sharing",
        },
        {
          id: 24,
          name: "Mr. Javid Shaikh",
          position: "CEO, Biopharma Incubation Center (BIC), NIPER-Ahmedabad",
          image: javidShaikh,
          resumeLink: "https://drive.google.com/file/d/1luBN1fWumxnQ6LcLwgxKztkmBUsSxcey/view?usp=sharing",
        },
        {
          id: 25,
          name: "Adv. Dr. Heena Patel",
          position: "Partner, INFINVENT IP",
          image: Heena,
          resumeLink: "https://drive.google.com/file/d/1FhznlDFTjrQxxzPc81a72raVViXJm_vW/view?usp=sharing",
        },
        {
          id: 26,
          name: "Mr. Bhavik Bhansali",
          position: "Senior Engineer, L&T Technology Services",
          image: BHAVIK_BHANSALI,
          resumeLink: "https://drive.google.com/file/d/1uOb76AHhegheXcK7H9u1p4Gl2sT5zAeq/view?usp=sharing",
        },
        {
          id: 27,
          name: "Mr. Akash Dadhania",
          position: "Owner, J K Fertilizers",
          image: akashDadhania,
          resumeLink: "https://drive.google.com/file/d/1wtPGs-6lRCm27oABbdNKH4IQWreXKIj0/view?usp=sharing",
        },
        {
          id: 28,
          name: "CA Jitendra Jain",
          position: "CEO, Tapanshi Finanziell Pvt. Ltd.",
          image: jitendraJain,
          resumeLink: "https://drive.google.com/file/d/1ZIjMlISzfEHKzBtX17uy5mnafAgZyPIb/view?usp=sharing",
        },
        {
          id: 29,
          name: "Dr. Ashish Kumar",
          position: "Associate Professor, Inter University Accelerator Center",
          image: ashishKumar,
          resumeLink: "https://drive.google.com/file/d/1Jk7yWnkL1dp5VS19oOrwTWrg6suAl9pi/view?usp=sharing",
        },
        {
          id: 30,
          name: "Nilesh Vaghela",
          position: "CEO, Electromech Cloudtech Pvt. Ltd.",
          image: nileshVaghela,
          resumeLink: "https://drive.google.com/file/d/126zhWcYEPqMwzxDH_p3g883ZNb4a6EYA/view?usp=sharing",
        },
        {
          id: 31,
          name: "Karmjitsinh Bihola",
          position: "Founder, Innodesk Designovation Services",
          image: karmjitsinhBihola,
          resumeLink: "https://drive.google.com/file/d/15Qqik9s9MGSf1mBJ6Hah9C9ZqF8YXs1t/view?usp=sharing",
        },
        {
          id: 32,
          name: "Mr. Anant Acharya",
          position: "CTO, MarsBazaar.com",
          image: anantAcharya,
          resumeLink: "https://drive.google.com/file/d/1USIuhnmDN2InedqhFO11F5y6MRbuDRsF/view?usp=sharing",
        },
      ],
    },
    {
      id: "tc",
      name: "Technical Associates",
      members: [
        {
          id: 1,
          name: "Ms. Foram Mistry",
          position: "Technical Associate",
          image: foram,
          resumeLink: "https://drive.google.com/file/d/1la_2SILlCEtfEqzgV0Klq5bXEFdFJ95R/view?usp=sharing",
        },
        {
          id: 2,
          name: "Mr. Krish Shah",
          position: "Technical Associate",
          image: krish,
          resumeLink: "https://drive.google.com/file/d/1U1y8UrjXI7msX5wbgbTD2h1VGwlMNaiv/view?usp=sharing",
        },
        {
          id: 3,
          name: "Ms. Kartavi Patel",
          position: "Technical Associate",
          image: kartavi,
          resumeLink: "https://drive.google.com/file/d/1He8AgeoGrk53c28OtLTIg-EnLZGZ8f4g/view?usp=sharing",
        },
        {
          id: 4,
          name: "Mr. Chandraveer Sinh Solanki",
          position: "Technical Associate",
          image: chandraveer,
          resumeLink: "https://drive.google.com/file/d/1TGVNe7Q9Z5UFB0K1u2GGTieFTKzSJP1W/view?usp=sharing",
        },
      ],
    },
    {
      id: "student",
      name: "Student Team",
      members: [
        {
          id: 1,
          name: "Mr. Soham Kava",
          position: "Academic Associate",
          image: soham,
          resumeLink: "https://drive.google.com/file/d/1c1xVXPzIx0En0QCoU_jl9U7BFlJka6i7/",
        },
        {
          id: 2,
          name: "Ms. Devanshi Mufti",
          position: "Academic Associate",
          image: devanshi,
          resumeLink: "https://drive.google.com/file/d/1gWZmptw4iYsGJPDGOeIh1kW4YLclx-qn/",
        },
        {
          id: 3,
          name: "Ms. Panjal Dave",
          position: "Academic Associate",
          image: pranjal,
          resumeLink: "https://drive.google.com/file/d/1sEjdxBqVI069NnBQRD1Hfj7HFbRwCFy7/",
        },
        {
          id: 4,
          name: "Mr. Dhruv Verma",
          position: "Academic Associate",
          image: dhru_verma,
          resumeLink: "https://drive.google.com/file/d/11sZw31uVSSP3Qk_zdRk_eNbPombzRoHo/",
        },
        {
          id: 5,
          name: "Ms. Ishika Patel",
          position: "Academic Associate",
          image: ishika,
          resumeLink: "https://drive.google.com/file/d/1prBp-K4o56VK0J3Te7IZXqdQfduUq0ow/view?usp=sharing",
        },
        {
          id: 6,
          name: "Mr. Vedhant Ratnottar",
          position: "Student",
          image: vedantratna,
          resumeLink: "https://drive.google.com/file/d/1_tYZBdKP6gEpdyR64ypUi4auf0Lv6VJp/",
        },
        {
          id: 7,
          name: "Ms. Chhaya Raundal",
          position: "Student",
          image: chhaya,
          resumeLink: "https://drive.google.com/file/d/1dAnb35BNgZOURjsJaY_QHA4eMwsLj_Ca/",
        },
      ],
    },
  ]);

  // Find the active category
  const activeCategory = teamCategories.find(cat => cat.id === activeTeam) || teamCategories[0];

  const handleCategoryChange = (categoryId: string) => {
    setActiveTeam(categoryId);
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      {isMobile ? (
        <div className="mb-8">
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 rounded-lg text-left">
              <span className="font-medium text-lg">{activeCategory?.name}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 rounded-lg shadow-md overflow-hidden">
              {teamCategories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left p-3 ${category.id === activeTeam ? 'text-guiitar-primary' : 'hover:bg-gray-100'}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  <span className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    {category.name}
                  </span>
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      ) : (
        <Tabs defaultValue="our-team" value={activeTeam} onValueChange={setActiveTeam} className="w-full">
          <TabsList className="flex w-full mb-8 space-x-2">
            {teamCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex-1 flex items-center justify-center py-2 px-4 rounded-md data-[state=active]:text-guiitar-primary"
              >
                <Users className="mr-2 h-4 w-4" />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      {activeCategory && (
        <div className="py-4">
          <h3 className="text-2xl font-semibold mb-6">{activeCategory.name}</h3>
          
          {activeCategory.members.length > 0 ? (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {activeCategory.members.map((member) => (
                  <CarouselItem key={member.id} className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-lg flex justify-center items-center">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover filter grayscale hover:grayscale-0 transition-filter duration-300"
                        />
                      </div>
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-xl mb-1">{member.name}</h4>
                        <p className="text-gray-600 mb-4">{member.position}</p>
                        
                        {member.bio && (
                          <p className="text-gray-700 text-sm mb-4 line-clamp-3">{member.bio}</p>
                        )}
                        
                        <div className="flex justify-center space-x-3 mb-4">
                          <a href="#" className="text-gray-400 hover:text-guiitar-primary">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76c-1.15 0-2.07-.9-2.07-2.01 0-1.11.92-2.01 2.07-2.01 1.14 0 2.06.9 2.06 2.01 0 1.11-.92 2.01-2.06 2.01zm14.62 12.34h-3.6v-5.61c0-1.33-.02-3.05-1.87-3.05-1.88 0-2.16 1.45-2.16 2.95v5.71h-3.6V9.24h3.45v1.58h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.38 4.3 5.45v5.7z"></path>
                            </svg>
                          </a>
                          <a href="#" className="text-gray-400 hover:text-guiitar-primary">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                          </a>
                        </div>
                      </CardContent>
                      {member.resumeLink && (
                        <CardFooter className="justify-center pt-2 pb-4">
                          <Button 
                            variant="outline" 
                            className="w-full"
                            asChild
                          >
                            <a 
                              href={member.resumeLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <FileText className="mr-2 h-4 w-4" />
                              View Resume
                            </a>
                          </Button>
                        </CardFooter>
                      )}
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 space-x-4">
                <CarouselPrevious className="relative static transform-none" />
                <CarouselNext className="relative static transform-none" />
              </div>
            </Carousel>
          ) : (
            <div className="text-center text-gray-600">
              <p>No team members available for this category.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;