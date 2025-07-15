import React from 'react';
import Image from 'next/image';

const Logo = ({ className = "", width = 181, height = 58, variant, src }) => (
  <Image
    src={src ? src : (variant === 'event' ? 'https://imagens.metricasboss.com.br/logo_azul_as_letra_preta_svg_ced2b1c97d.svg' : '/next.svg')}
    alt="Logo"
    width={width}
    height={height}
    className={className}
  />
);

export default Logo;
