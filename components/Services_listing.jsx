import {
  FiPackage,
  FiTruck,
  FiThermometer,
  FiActivity,
  FiFileText,
  FiArrowUpRight,
} from "react-icons/fi";
const icons = {
  regular: FiPackage,
  dedicated: FiTruck,
  cold: FiThermometer,
  medical: FiActivity,
  docs: FiFileText,
};
export default function ServiceCard({ service, onSelect }) {
  const Icon = icons[service.icon];
  return (
    <article className="service-box rounded-lg border border-white/20 p-7 md:p-8 flex flex-col">
      <Icon size={38} className="text-orange mb-7" aria-hidden="true" />
      <p className="text-orange text-sm font-semibold mb-3">{service.brand}</p>
      <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
      <p className="text-white/80 leading-relaxed">{service.description}</p>
      <p className="text-white/70 text-sm leading-relaxed mt-4 mb-7">
        {service.detail}
      </p>
      <a
        href="#contact"
        onClick={() => onSelect(service.id)}
        className="service-link mt-auto flex items-center justify-between gap-4 font-semibold"
      >
        {service.action}
        <FiArrowUpRight
          className="text-orange flex-shrink-0"
          size={22}
          aria-hidden="true"
        />
      </a>
    </article>
  );
}
