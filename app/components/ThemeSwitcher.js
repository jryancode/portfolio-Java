'use client';
import $ from 'jquery';

export default function ThemeSwitcher() {
  const handleClick = (e) => {
    e.preventDefault();
    $('body').toggleClass('nill-dark');
    $('.section').toggleClass('bg-dark');
    $('.color-scheme').children().toggleClass('lni-night lni-sun');
  };
  return (
    <a
      className="color-scheme text-white bg-base-color d-inline-block"
      onClick={handleClick}
    >
      <i className="lni-sun"></i>
    </a>
  );
}
