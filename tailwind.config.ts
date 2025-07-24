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
				'serif': ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
				'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
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
				'gradientShift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%',
						transform: 'scale(1)'
					},
					'50%': {
						backgroundPosition: '100% 50%',
						transform: 'scale(1.02)'
					}
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateX(100%)', opacity: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
					'33%': { transform: 'translateY(-12px) rotateZ(1.5deg)' },
					'66%': { transform: 'translateY(-18px) rotateZ(-1.5deg)' }
				},
				'morphing-gradient': {
					'0%, 100%': {
						backgroundPosition: '0% 50%',
						transform: 'scale(1) rotate(0deg)'
					},
					'33%': {
						backgroundPosition: '50% 25%',
						transform: 'scale(1.05) rotate(2deg)'
					},
					'66%': {
						backgroundPosition: '100% 75%',
						transform: 'scale(1.03) rotate(-1deg)'
					}
				},
				'subtle-pulse': {
					'0%, 100%': {
						opacity: '0.9',
						transform: 'scale(1)',
						boxShadow: 'var(--shadow-card)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.03)',
						boxShadow: 'var(--shadow-hover)'
					}
				},
				'pulse-golden': {
					'0%, 100%': { boxShadow: '0 0 25px hsl(var(--primary) / 0.4)' },
					'50%': { boxShadow: '0 0 50px hsl(var(--primary) / 0.7), 0 0 80px hsl(var(--primary) / 0.3)' }
				},
				'slide-up-luxury': {
					'0%': {
						opacity: '0',
						transform: 'translateY(80px) scale(0.9)',
						filter: 'blur(8px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0)'
					}
				},
				'rotate-glow': {
					'0%': {
						transform: 'rotate(0deg)',
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
					},
					'100%': {
						transform: 'rotate(360deg)',
						boxShadow: '0 0 40px hsl(var(--primary) / 0.5)'
					}
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradientShift': 'gradientShift 4s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float 6s ease-in-out infinite -2s',
				'float-slow': 'float 8s ease-in-out infinite -4s',
				'morphing-gradient': 'morphing-gradient 8s ease-in-out infinite',
				'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
				'pulse-golden': 'pulse-golden 2s ease-in-out infinite',
				'slide-up-luxury': 'slide-up-luxury 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'rotate-glow': 'rotate-glow 4s linear infinite',
				'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;