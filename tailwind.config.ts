
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: '#D4C4B5',
				input: '#F5F0E8',
				ring: '#8B4513',
				background: '#FDFBF7',
				foreground: '#2C1810',
				primary: {
					DEFAULT: '#8B4513',  // Grona (marron foncé)
					foreground: '#F5F0E8' // Beige clair
				},
				secondary: {
					DEFAULT: '#D4C4B5',  // Beige moyen
					foreground: '#2C1810' // Marron très foncé
				},
				destructive: {
					DEFAULT: '#BC1A1A',
					foreground: '#FFF5F5'
				},
				muted: {
					DEFAULT: '#F5F0E8',  // Beige très clair
					foreground: '#65371D' // Marron moyen
				},
				accent: {
					DEFAULT: '#A05B2C',  // Grona (marron plus clair)
					foreground: '#F9F6F1' // Beige très clair
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#2C1810'
				},
				card: {
					DEFAULT: '#FAEBD7',
					foreground: '#654321'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors inspired by the logo
				cream: {
					50: '#FEFCF8',
					100: '#FDF9F0',
					200: '#FAF0E6',
					300: '#F5F5DC',
					400: '#F0E68C',
					500: '#DEB887',
					600: '#D2B48C',
					700: '#BC9A6A',
					800: '#A0522D',
					900: '#8B4513'
				},
				burgundy: {
					50: '#FDF2F8',
					100: '#FCE7F3',
					200: '#FBCFE8',
					300: '#F9A8D4',
					400: '#F472B6',
					500: '#C44569',
					600: '#BE185D',
					700: '#9D174D',
					800: '#831843',
					900: '#7C2D12'
				},
				terracotta: {
					50: '#FEF7F0',
					100: '#FDEDE0',
					200: '#FADAC1',
					300: '#F6C298',
					400: '#F1A56E',
					500: '#CD853F',
					600: '#D2691E',
					700: '#A0522D',
					800: '#8B4513',
					900: '#654321'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.3s ease-out'
			},
			fontFamily: {
				'arabic': ['Amiri', 'serif'],
				'heading': ['Playfair Display', 'serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
