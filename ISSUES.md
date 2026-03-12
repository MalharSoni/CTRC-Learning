# CTRC Learning Website - Known Issues

**Last Updated:** March 11, 2026
**Status:** Active Development

---

## Build Warnings

### MkDocs Navigation Configuration Warnings

**Severity:** ⚠️ Low (Non-Critical)

**Description:**
During `mkdocs serve`, the following pages exist in the docs directory but are not included in the "nav" configuration:

```
- changelog.md
- index-old.md
- website-feature-guide.md
- best-practices/index.md
- components/README.md
- components/FEATURE_SECTION_README.md
- components/FEATURE_SECTION_VISUAL_GUIDE.md
- components/GLOWING-EFFECT-INSTALL.md
- components/GLOWING-EFFECT-README.md
- components/GLOWING-EFFECT-SUMMARY.md
- components/GLOW_CUSTOMIZATION_GUIDE.md
- components/ICON_QUICK_REFERENCE.md
- components/ICON_SYSTEM.md
- components/IMPLEMENTATION_SUMMARY.md
- components/INDEX.md
- components/QUICK-START.md
- components/QUICKSTART.md
- components/SIDEBAR_README.md
- components/TUBELIGHT_NAVBAR_COMPLETE.md
- components/TUBELIGHT_NAVBAR_README.md
- components/flip-button-README.md
- components/flip-button-demo.md
- components/flip-button-integration.md
- educators-guide/index.md
- foundation/unit1/CODECADEMY_UX_RESEARCH.md
- foundation/unit1/ODIN_PROJECT_UX_ANALYSIS.md
- resources/index.md
```

**Impact:**
- Pages are not accessible via navigation menu
- May appear in search results if search is enabled
- No functional impact on current site

**Recommended Action:**
1. **Option A (Recommended):** Add relevant pages to `mkdocs.yml` nav configuration
2. **Option B:** Move documentation files to a separate `/docs-internal/` or `/.docs/` directory
3. **Option C:** Add these files to `.mkdocsignore` if they shouldn't be built at all

**Resolution Plan:**
- Categorize files:
  - **Keep & Add to Nav:** changelog.md, educators-guide/index.md, resources/index.md, best-practices/index.md
  - **Move to Internal Docs:** All component README files (developer documentation)
  - **Archive or Delete:** index-old.md, duplicate files (QUICKSTART vs QUICK-START)

---

## MkDocs 2.0 Compatibility Warning

**Severity:** ⚠️ Medium (Future Concern)

**Description:**
Material for MkDocs team has issued a warning about MkDocs 2.0 upcoming breaking changes:

```
MkDocs 2.0, the underlying framework of Material for MkDocs,
will introduce backward-incompatible changes, including:

× All plugins will stop working – the plugin system has been removed
× All theme overrides will break – the theming system has been rewritten
× No migration path exists – existing projects cannot be upgraded
× Closed contribution model – community members can't report bugs
× Currently unlicensed – unsuitable for production use
```

**Impact:**
- Future MkDocs updates may break current setup
- Theme customizations may need to be rewritten
- Plugin compatibility uncertain

**Recommended Action:**
1. Monitor Material for MkDocs updates and migration guides
2. Pin current MkDocs version in requirements.txt
3. Test updates in isolated environment before upgrading
4. Consider alternative documentation frameworks if MkDocs 2.0 proves problematic

**Reference:** https://squidfunk.github.io/mkdocs-material/blog/2026/02/18/mkdocs-2.0/

---

## Console Warnings (Third-Party)

**Severity:** ℹ️ Informational (Not Site Issues)

**Description:**
Browser console shows numerous errors and warnings from embedded third-party content and external services:

1. **Sentry Loader Warning:** "The Sentry loader you are trying to use isn't working anymore"
2. **Supabase GoTrue:** Multiple client instances detected
3. **PostHog:** Re-initialization warnings
4. **Featurebase SDK:** WebSocket connection failures (network disconnected)
5. **21st.dev:** TRPC authentication errors (expected - not logged in)
6. **Certificate Errors:** ERR_CERT_AUTHORITY_INVALID (from embedded iframes)

**Impact:**
- No impact on CTRC Learning site functionality
- These errors are from embedded content/widgets from other platforms
- May cause browser console clutter during development

**Recommended Action:**
- No action required for CTRC site
- If these are from analytics/monitoring services, verify configuration
- Consider removing unused third-party scripts if any

---

## Browser-Specific Issues

### Not Yet Tested

**Browsers Requiring Testing:**
- [ ] Firefox (Windows/Mac/Linux)
- [ ] Safari (Mac/iOS)
- [ ] Edge (Windows)
- [ ] Chrome Mobile (Android)
- [ ] Samsung Internet (Android)

**Potential Issues to Watch For:**
- CSS Grid layout differences
- Flexbox quirks
- Font rendering variations
- Canvas animation performance
- Touch interaction on mobile

---

## Accessibility Issues

### To Be Audited

The following accessibility areas need formal testing:

1. **Keyboard Navigation**
   - Tab order through interactive elements
   - Focus indicators visibility
   - Escape key handling for modals/menus

2. **Screen Reader Support**
   - ARIA labels completeness
   - Landmark regions properly labeled
   - Alternative text for decorative elements

3. **Color Contrast**
   - Verify all text meets WCAG AA standards (4.5:1 ratio)
   - Check button/link contrast in both light and dark themes

4. **Form Accessibility**
   - Search form (when implemented)
   - User type selection cards (verify checkbox semantics)

---

## Performance Issues

### Not Yet Measured

**Metrics to Collect:**
- [ ] Lighthouse Performance Score
- [ ] First Contentful Paint (FCP)
- [ ] Largest Contentful Paint (LCP)
- [ ] Cumulative Layout Shift (CLS)
- [ ] Time to Interactive (TTI)

**Known Concerns:**
- Background canvas may impact paint performance
- Google Fonts loading may cause FOUT (Flash of Unstyled Text)
- Large images (if any) need optimization

**Recommended Tools:**
- Chrome DevTools Lighthouse
- WebPageTest.org
- PageSpeed Insights

---

## Functional Issues

### Search Feature

**Status:** 🚧 Not Implemented

**Current Behavior:**
- Search button shows alert: "Search feature coming soon!"
- Suggests using browser search (Cmd/Ctrl+F) as workaround

**Recommended Implementation:**
- MkDocs search plugin (already available)
- Algolia DocSearch (for larger sites)
- Custom search with Fuse.js

### Theme Toggle

**Status:** ⚠️ Needs Testing

**Current State:**
- Theme toggle button present in navigation
- Function `toggleTheme()` referenced but needs verification
- Light/dark mode persistence unclear

**To Verify:**
- Theme switching works
- Preference saved to localStorage
- Respects system preference
- No flash of wrong theme on reload

### Link Testing

**Status:** ℹ️ Needs Manual Verification

**Links to Test:**
- [ ] All internal navigation links
- [ ] Footer links (Discord, GitHub, Contact)
- [ ] Foundation program unit links
- [ ] Project links
- [ ] External resources

---

## Content Issues

### Placeholder Content

**Status:** ℹ️ Informational

The following areas may contain placeholder or incomplete content:

- Some footer links point to "#" (no destination)
- "View Projects" button destination needs verification
- Community Discord link needs actual URL
- GitHub repo link needs verification

**Action Required:**
- Replace placeholder links with actual URLs
- Verify all CTA buttons lead to correct pages

---

## Mobile/Responsive Issues

### Tested Devices (Simulated)
- ✅ iPhone 13 (390x664) - PASSED
- ✅ iPad Pro 11 (834x1194) - PASSED

### Not Yet Tested on Real Devices
- [ ] iPhone (actual device testing)
- [ ] Android phones (various screen sizes)
- [ ] iPad/Android tablets (real devices)
- [ ] Landscape orientation behavior

**Potential Issues:**
- Touch target sizes for buttons/links
- Hover states on touch devices
- Viewport height issues on iOS Safari
- Pinch-zoom behavior

---

## Known Workarounds

1. **Search Unavailable:** Use browser's built-in search (Cmd/Ctrl+F)
2. **Nav Warnings:** Can be safely ignored during development
3. **Third-Party Console Errors:** Filter console to only show "localhost" domain

---

## Issue Priority Matrix

| Priority | Issue | Impact | Effort | Status |
|----------|-------|--------|--------|--------|
| 🔴 High | None currently | - | - | - |
| 🟡 Medium | MkDocs nav warnings | Low | Low | Open |
| 🟡 Medium | Search not implemented | Medium | Medium | Planned |
| 🟡 Medium | Cross-browser testing | Unknown | Medium | Pending |
| 🟢 Low | Accessibility audit | Medium | High | Pending |
| 🟢 Low | Performance testing | Low | Medium | Pending |
| 🟢 Low | Placeholder links | Low | Low | Open |

---

## Resolved Issues

*No issues have been resolved yet. This section will track fixed problems.*

---

## Reporting New Issues

If you encounter a new issue:

1. Check if it's already listed above
2. Reproduce the issue in multiple browsers
3. Document steps to reproduce
4. Add to this file or create a GitHub issue
5. Tag with severity and category

**Issue Template:**

```markdown
### [Issue Title]

**Severity:** 🔴/🟡/🟢 High/Medium/Low

**Description:** Clear description of the problem

**Steps to Reproduce:**
1. Step 1
2. Step 2
3. ...

**Expected Behavior:** What should happen

**Actual Behavior:** What actually happens

**Environment:**
- Browser: [e.g., Chrome 122]
- OS: [e.g., macOS 14.2]
- Device: [e.g., MacBook Pro]
- Screen Size: [e.g., 1920x1080]

**Screenshots:** (if applicable)

**Recommended Fix:** (if known)
```

---

## Testing Environment

**Current Test Configuration:**
- MkDocs Server: http://127.0.0.1:8001/
- Python Version: 3.9
- MkDocs Version: (check with `mkdocs --version`)
- Material Theme Version: (check package.json or requirements.txt)

**Test Tools Used:**
- Playwright (automated browser testing)
- Chrome/Chromium (primary test browser)
- Device simulation (Chrome DevTools)

---

**Last Test Run:** March 11, 2026
**Next Test Scheduled:** After next major update
