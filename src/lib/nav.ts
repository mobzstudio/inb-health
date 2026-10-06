export type NavItem = {
  href: string;
  label: string;
  title?: string;
};

export const siteNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/dra-juliana", label: "Dra. Juliana", title: "Dra. Juliana Cardoso Nogueira" },
  { href: "/nutrition", label: "INB Nutrition" },
  { href: "/care", label: "INB Care" },
  { href: "/club", label: "INB Club" },
  { href: "/contato", label: "Contato" },
];

export const contact = {
  email: "contato@inbhealth.com.br",
  press: "imprensa@inbhealth.com.br",
  phone: "+55 21 97917-1314",
  city: "Rio de Janeiro · RJ · Brasil",
  address: "Avenida das Américas, 3500 — Barra da Tijuca — Rio de Janeiro/RJ — CEP 22640-102",
  legalName: "INB Health · Instituto Nogueira de Brito",
  cnpj: "30.793.195/0001-35",
  crm: "CRM-RJ 52.0101317-3",
  founder: "Dra. Juliana Cardoso Nogueira",
};

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
