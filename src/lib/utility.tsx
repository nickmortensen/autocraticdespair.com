import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn( ...inputs: ClassValue[] ) {
	return twMerge( clsx( inputs ) )
  }


function sanitizeString( str: string ) {
	// Remove any characters not matching the allowed pattern
	str = str.replace(/[^a-z0-9áéíóúñü_\s.,-]/gim, "");
	return str.trim(); // Trim leading and trailing spaces
  }

export function sanitizeEntry( entry: string ) : string {
	const map: any = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;",
		"/": "&#47;"
	};
	const reg          = /[&<>"']/ig;
	let output: string =  entry.replace( reg, ( match) => map[ match ] );
	return sanitizeString( output )

}
/**
 *
 * @param phone string The phone number to use
 * @returns string A formatted phone number
 */
export function phoneFormat( phone: string ) {
	return phone.replace( /\D/g, '' ).slice(-10).match( /^(\d{3})(\d{3})(\d{4})$/ );
}
