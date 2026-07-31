# JustALink - The URL is all

JustALink is a serverless, zero-database "Link-in-bio". User profiles (name, avatar, bio, theme, and links) are compressed and encoded entirely inside the URL hash fragment (`#data=...`). 
 
![Screenshot1 ](/assets/screenshot1.jpg)
![Screenshot 2](/assets/screenshot2.jpg)
> Try it out at [https://jaival-11.github.io/justalink](https://jaival-11.github.io/justalink?utm_source=readme)

---

## Features

* **Zero-server Architecture:** Your profile payload lives completely inside the URL hash (`#data=`).
* **Privacy-First:** No user data is stored on external servers or databases.
* **Themes:** Select from six themes (*Slate Dark*, *Minimal Light*, *Cyber High-Contrast*, *Emerald Solid*, *Berry Violet*, and *Neo Punch*), or make you own!
* **Fully customisable:** All aspects of the page can be easily customised, it's your page - make it your own.
* **Restore profiles:** Easily restore profiles from url or hash so you can easily make edits without needing to reconstruct them.
* **No-login:** No account creation required.
* **Lightweight & Fast:** Pure client-side execution with zero framework bloat.
* **Professionalism:** Creates pages which can be used for professional purposes too

---
## How it works

Traditional bio-link services store user profiles in a central database and assign you an ID. **JustALink** flips this model on its head:

1. You customize your bio, links, and design in **Builder Mode**.
2. The app compresses and URL-encodes your configuration into a single hash string.
3. Your generated link *is* your database. Anyone opening the link decodes the hash locally in their browser to render your profile.
---

## Bug reports and feature suggestions

If you have encounter any bug or have any suggestions that could make this project better feel free to [open an issue](https://github.com/jaival-11/justalink/issues/new)

---

## Tech Stack

* **Frontend Core:** HTML5, Vanilla JavaScript (ES6+)
* **Styling:** CSS3, Tailwind CSS (via CDN - solid color utilities only)
* **Architecture:** Client-side Single Page Application (SPA) with URL Hash Routing
* **Data & Storage:** Zero-Database / Serverless (State persisted via Base64 JSON payload in URL hash fragments)
* **Deployment:** GitHub Pages (Static Hosting)

---

## How to Run Locally

You can run JustALink using any standard HTTP web server, e.g.:

```bash
# Using Python builtin HTTP server
python3 -m http.server 8080

# Or using Node.js npx serve
npx serve .
```

Then open `http://localhost:8080` in your browser.

## Contributing

Contributions are welcome! Whether it's fixing a UI bug, optimizing the URL compression/encoding, or suggesting new profile blocks:

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. ​Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request

---
## Support

I know I have locked some features. The only reason to do that is, starring the repo or following me doesn't cost you anything but for me it really makes the difference. So every star, every follow matters to me. Those stars and follow motivate me to keep improving, maintaining, and make such projects. If you haven't already please consider [starring the repo](https://github.com/jaival-11/justalink) and may be even following [me](https://github.com/jaival-11). Thank you. Hope you like my work.

---
## Disclaimer and Privacy

**JustALink is a strictly client-side tool.** Because the entire profile payload is encoded directly into the URL hash (*"The URL is all"*), **no user-generated content is ever sent to, or stored on, any server.** 

* **Zero Visibility:** I have absolutely no way to see, track, or moderate the links, bios, or profiles you create. 
* **User Responsibility:** You are solely responsible for the content you generate and share using this tool. I am not liable for any misuse of JustALink or the content hosted within user-generated URLs.
* **AI Disclaimer:** Codebase and documentation is created with the assistance of ai.
* **Analytics:** The project uses privacy-friendly Umami Analytics. This is strictly configured to capture anonymous data, aggregate counts (like total page visits), and all URL hashes are actively stripped. I do not track individuals nor have access to unique hashes created by you—the only reason to implement is watching the overall usage numbers go up just genuinely motivates me to keep maintaining and improving the project!


---
## License & Credits

This project is inspired from [Onelink](https://github.com/fayazara/onelink) by [fayazara](https://github.com/fayazara)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
<div align="center"> 
<b>Built with ❤️ by <a href="https://github.com/jaival-11">Jaival</a></b>
</div>

