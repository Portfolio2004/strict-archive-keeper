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
			fontFamily: {
				'serif': ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
				'sans': ['Montserrat', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
				'luxury': ['Crimson Text', 'Cormorant Garamond', 'serif'],
				'display': ['Cinzel', 'Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					bright: 'hsl(var(--primary-bright))',
					deep: 'hsl(var(--primary-deep))',
					luxury: 'hsl(var(--primary-luxury))',
					platinum: 'hsl(var(--primary-platinum))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))',
					bright: 'hsl(var(--accent-bright))',
					warm: 'hsl(var(--accent-warm))',
					platinum: 'hsl(var(--accent-platinum))',
					rose: 'hsl(var(--accent-rose))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-golden-luxury': 'var(--gradient-golden-luxury)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-premium': 'var(--gradient-premium)',
				'gradient-mesh': 'var(--gradient-mesh)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-button': 'var(--gradient-button)',
				'gradient-text': 'var(--gradient-text)',
			},
			boxShadow: {
				'golden': 'var(--shadow-golden)',
				'glow': 'var(--shadow-glow)',
				'accent': 'var(--shadow-accent)',
				'card': 'var(--shadow-card)',
				'button': 'var(--shadow-button)',
				'hover': 'var(--shadow-hover)',
				'premium': 'var(--shadow-premium)',
				'glass': 'var(--shadow-glass)',
				'text': 'var(--shadow-text)',
				'inset': 'var(--shadow-inset)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			transitionTimingFunction: {
				'ultra': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'glow': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'elastic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			},
			transitionDuration: {
				'ultra': '800ms',
				'smooth': '600ms',
				'glow': '600ms',
				'premium': '800ms',
				'elastic': '700ms',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'luxury-fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px) scale(0.95)',
						filter: 'blur(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0)'
					}
				},
				'elegant-slide': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-60px) rotateY(15deg)',
						filter: 'blur(5px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0) rotateY(0deg)',
						filter: 'blur(0)'
					}
				},
				'premium-glow': {
					'0%, 100%': {
						boxShadow: '0 0 30px hsl(var(--primary) / 0.3), 0 0 60px hsl(var(--primary) / 0.1)'
					},
					'50%': {
						boxShadow: '0 0 60px hsl(var(--primary) / 0.6), 0 0 120px hsl(var(--primary) / 0.2), 0 0 180px hsl(var(--primary) / 0.05)'
					}
				},
				'luxury-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotateX(0deg)',
						filter: 'brightness(1)'
					},
					'33%': {
						transform: 'translateY(-20px) rotateX(2deg)',
						filter: 'brightness(1.1)'
					},
					'66%': {
						transform: 'translateY(-30px) rotateX(-2deg)',
						filter: 'brightness(1.05)'
					}
				},
				'crystal-shimmer': {
					'0%': {
						backgroundPosition: '-200% center',
						filter: 'brightness(1)'
					},
					'50%': {
						filter: 'brightness(1.3)'
					},
					'100%': {
						backgroundPosition: '200% center',
						filter: 'brightness(1)'
					}
				},
				'royal-pulse': {
					'0%, 100%': {
						transform: 'scale(1)',
						boxShadow: '0 0 40px hsl(var(--primary) / 0.3)'
					},
					'50%': {
						transform: 'scale(1.05)',
						boxShadow: '0 0 80px hsl(var(--primary) / 0.6), 0 0 120px hsl(var(--accent) / 0.3)'
					}
				},
				'diamond-spin': {
					'0%': {
						transform: 'rotate(0deg) scale(1)',
						filter: 'brightness(1) saturate(1)'
					},
					'25%': {
						filter: 'brightness(1.2) saturate(1.1)'
					},
					'50%': {
						transform: 'rotate(180deg) scale(1.1)',
						filter: 'brightness(1.3) saturate(1.2)'
					},
					'75%': {
						filter: 'brightness(1.2) saturate(1.1)'
					},
					'100%': {
						transform: 'rotate(360deg) scale(1)',
						filter: 'brightness(1) saturate(1)'
					}
				},
				'velvet-reveal': {
					'0%': {
						clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
						opacity: '0'
					},
					'100%': {
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'luxury-fade-in': 'luxury-fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'elegant-slide': 'elegant-slide 1s cubic-bezier(0.23, 1, 0.32, 1) forwards',
				'premium-glow': 'premium-glow 4s ease-in-out infinite',
				'luxury-float': 'luxury-float 8s ease-in-out infinite',
				'luxury-float-delayed': 'luxury-float 8s ease-in-out infinite -3s',
				'crystal-shimmer': 'crystal-shimmer 3s ease-in-out infinite',
				'royal-pulse': 'royal-pulse 4s ease-in-out infinite',
				'diamond-spin': 'diamond-spin 6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
				'velvet-reveal': 'velvet-reveal 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;