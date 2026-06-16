'use client';
import { useEffect } from 'react';
import $ from 'jquery';


export default function Overlayer() {
  const removeOverlayer = () => {
    $('#overlayer').delay(200).fadeOut('slow');
    $('.loader').delay(500).fadeOut('slow');
    $('.owl-item.active .hero-slide').addClass('zoom');
  };
  useEffect(() => {
    removeOverlayer();
  }, []);
  return (
    <div id="overlayer">
      <span
        className="spinner-grow spinner-grow-lg loader"
        role="status"
        aria-hidden="true"
      ></span>
    </div>
  );
}
