# SEO Audit Checklist

## ✅ Technical SEO

### Meta Tags
- [ ] All pages have unique `<title>` tags (50-60 characters)
- [ ] All pages have meta descriptions (150-160 characters)
- [ ] Homepage has proper meta keywords
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card tags implemented

### Structured Data (Schema Markup)
- [x] Homepage: Organization + Website schema
- [x] Contact page: ContactPage schema
- [x] Blog posts: Article schema with author, dates
- [x] Agent pages: Person schema with contact info
- [x] Breadcrumb schema on detail pages
- [ ] FAQ schema (if FAQ pages exist)
- [ ] LocalBusiness schema for location pages

### URLs & Navigation
- [x] Clean, descriptive URLs (no query strings)
- [x] Sitemap.xml generated automatically
- [x] Robots.txt configured properly
- [ ] 404 page exists and is user-friendly
- [ ] Proper breadcrumb navigation

### Performance
- [ ] Images optimized (Next.js Image component used)
- [ ] Lazy loading enabled
- [ ] Core Web Vitals passing (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Page load time < 3 seconds
- [ ] Mobile page speed score > 80

---

## 📱 Mobile Optimization

- [ ] Responsive design on all screen sizes
- [ ] Touch targets at least 48x48px
- [ ] Text readable without zooming (16px minimum)
- [ ] No horizontal scrolling
- [ ] Mobile-friendly navigation

---

## 🖼️ Images & Media

- [ ] All images have descriptive `alt` text
- [ ] Images properly sized (not oversized)
- [ ] Modern image formats (WebP) where possible
- [ ] Lazy loading for below-fold images
- [ ] Logo has appropriate dimensions

---

## 📝 Content Quality

- [ ] Unique content on each page
- [ ] H1 tag on every page (only one per page)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Internal linking between related pages
- [ ] No duplicate content
- [ ] Content is readable (Flesch score > 60)

---

## 🔗 Links

- [ ] All internal links work (no 404s)
- [ ] External links open in new tab (`target="_blank"`)
- [ ] External links have `rel="noopener noreferrer"`
- [ ] No broken links
- [ ] Anchor text is descriptive

---

## 🌐 Internationalization

- [ ] `lang="en"` attribute in HTML tag
- [ ] Proper locale in Open Graph tags (`en_CA`)
- [ ] Currency and date formats appropriate for Canada
- [ ] Hreflang tags if multi-language

---

## 🔒 Security & Privacy

- [ ] HTTPS enabled (SSL certificate)
- [ ] Security headers configured
- [ ] Privacy policy page exists
- [ ] Terms of service page exists
- [ ] Cookie consent banner (if using cookies)
- [ ] GDPR compliant (if applicable)

---

## 📊 Analytics & Tracking

- [x] Google Analytics 4 configured
- [ ] Google Search Console verified
- [ ] Conversion tracking set up
- [ ] Event tracking for key actions
- [ ] Error tracking (Sentry, etc.)

---

## 🚀 Advanced SEO

### Local SEO (if applicable)
- [ ] Google My Business listing
- [ ] NAP (Name, Address, Phone) consistency
- [ ] Local schema markup
- [ ] Reviews and ratings display

### Rich Snippets
- [ ] FAQ schema for FAQ pages
- [ ] How-to schema for guides
- [ ] Review schema for testimonials
- [ ] Breadcrumb schema on all pages

---

## 🧪 Testing Tools

### Run these tests:

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Test both mobile and desktop
   - Target score: 90+

2. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Verify schema markup is valid

3. **Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly
   - Ensure all pages pass

4. **Google Search Console**
   - Check for coverage errors
   - Monitor Core Web Vitals
   - Review search performance

5. **Schema Validator**
   - URL: https://validator.schema.org/
   - Paste page HTML to validate

6. **Lighthouse Audit**
   - Open Dev Tools → Lighthouse
   - Run audit for Performance, SEO, Accessibility
   - Target scores: All 90+

---

## 📋 Quick Checks

### Homepage
- [ ] Loads in < 2 seconds
- [ ] Has clear value proposition
- [ ] CTA buttons are visible
- [ ] Schema markup validates
- [ ] Meta tags are unique

### Contact Page
- [ ] Form submits successfully
- [ ] Contact info is visible
- [ ] Map loads (if included)
- [ ] Phone/email are clickable
- [ ] Schema markup validates

### Blog Posts
- [ ] Featured images load
- [ ] Author info displays
- [ ] Published date shows
- [ ] Related posts appear
- [ ] Social sharing works

### Agent Pages
- [ ] Profile images load
- [ ] Contact info is correct
- [ ] Specialties display
- [ ] Reviews show (if any)
- [ ] Schema markup validates

---

## 🔧 Common Issues to Fix

1. **Missing Alt Text**: Check all `<img>` tags
2. **Slow Images**: Optimize file sizes
3. **Duplicate Titles**: Make each page title unique
4. **Thin Content**: Add more valuable content
5. **Broken Links**: Test all internal/external links
6. **Mobile Issues**: Test on real devices
7. **Schema Errors**: Validate with Google tools

---

## 📈 Priority Levels

### 🔴 HIGH (Fix Immediately)
- Broken links (404 errors)
- Missing meta descriptions
- Slow page load (> 5 seconds)
- Mobile responsiveness issues
- Security warnings

### 🟡 MEDIUM (Fix Soon)
- Missing alt text on images
- Duplicate content
- Suboptimal heading structure
- Missing schema markup
- Low content quality

### 🟢 LOW (Nice to Have)
- Minor performance tweaks
- Additional schema types
- Enhanced rich snippets
- Advanced tracking events

---

## ✅ Final Checklist Before Launch

- [ ] All pages tested on mobile
- [ ] All forms work correctly
- [ ] Analytics tracking verified
- [ ] Search Console submitted
- [ ] Sitemap submitted to Google
- [ ] 301 redirects configured (if needed)
- [ ] Performance benchmarks met
- [ ] Schema markup validated
- [ ] Security headers configured
- [ ] HTTPS enforced

---

## 📞 Next Steps

1. Run all testing tools listed above
2. Fix high-priority issues first
3. Document any issues found
4. Retest after fixes
5. Monitor Google Search Console weekly

**Estimated Time for Full Audit: 2-3 hours**
