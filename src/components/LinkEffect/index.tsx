import Link from 'next/link';

interface LinkEffectProps {
  href: string;
  children: React.ReactNode;
}

function LinkEffect({ href, children }: LinkEffectProps) {
  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        // e.stopPropagation();
        console.log('clicked');
        window.location.href = href;
      }}
      href={href}
    >
      {children}
    </Link>
  );
}

export default LinkEffect;
