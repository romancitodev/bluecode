'use client';
import React from 'react';

export function InputMessage({ text }: { text?: string }) {
	return <p className='text-red-500 font-semibold'>{text}</p>;
}
