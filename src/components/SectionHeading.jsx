export default function SectionHeading({ title, text, center = false, light = false }) {
  return (
    <div className={`mb-10 max-w-2xl sm:mb-14 ${center ? 'mx-auto text-center' : ''}`}>
      <h2 className={`text-4xl font-semibold leading-tight sm:text-5xl ${light ? '!text-beige' : ''}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-beige/80' : 'text-brown/75'}`}>{text}</p>}
    </div>
  );
}
