# JustALink - The URL is all

JustALink is a serverless, zero-database "Link-in-bio". User profiles (name, avatar, bio, theme, and links) are compressed and encoded entirely inside the URL fragment (`#data=...`). 
 
![Screenshot1 ](/assets/screenshot1.jpg)
![Screenshot 2](/assets/screenshot2.jpg)
> Try it out at [https://jaival-11.github.io/justalink](https://jaival-11.github.io/justalink?utm_source=readme)

---

## Features

* **Zero-server Architecture:** Your profile payload lives completely inside the URL (`#data=`).
* **Privacy-First:** No user data is stored on external servers or databases.
* **Themes:** Select from six themes (*Slate Dark*, *Minimal Light*, *Cyber High-Contrast*, *Emerald Solid*, *Berry Violet*, and *Neo Punch*), or make you own!
* **Fully customisable:** All aspects of the page can be easily customised, it's your page - make it your own.
* **Restore profiles:** Easily restore profiles from url or hash so you can easily make edits without needing to reconstruct them.
* **No-login:** No account creation required.
* **Lightweight & Fast:** Pure client-side execution with zero framework bloat.
* **Professionalism:** Creates pages which can be used for professional purposes too

---
## How it works

Traditional bio-link services store user profiles in a central database and assign you an ID. **JustALink** changes this:

1. You customize your bio, links, and design in **Builder Mode**.
2. The app compresses and URL-encodes your configuration into a single base64 string.
3. Your generated link *is* your database. Anyone opening the link decodes it locally in their browser to render your profile.
---

## Bug reports and feature suggestions

If you have encounter any bug or have any suggestions that could make this project better feel free to [open an issue](https://github.com/jaival-11/justalink/issues/new). You can also email me:

[![Email Support](https://img.shields.io/badge/Email-Contact_Me-db4437?style=for-the-badge&labelColor=0d1117&logo=gmail)](mailto:jaival7909@gmail.com)

---

## Support

~I know I have locked some features~. I have kept all features unlocked, without any restrictions. If you like this project or like any of my other works, please consider supporting me. Supporting really helps motivate me to keep creating, maintaining, and improving open-source projects like this. You can support me by starring  my repository on Github, following me on X or Github, or joining my Telegram channel. You can also support me by sharing my work with your friends. Starring the repo or following me doesn't cost you anything but for me it really makes the difference. Every bit of support truly means a lot to me! Thank you. Hope you like my work.

[![Star Repo](https://img.shields.io/badge/Star%20my%20repo-FFE100?style=for-the-badge)](https://github.com/jaival-11/justalink)
[![Follow on Github](https://img.shields.io/badge/Follow%20on%20Github-000000?style=for-the-badge&logo=Github)](https://github.com/jaival-11)
[![Join Telegram channel](https://img.shields.io/badge/Join%20channel-2AABEE?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/techironic)
[![Follow on X](https://img.shields.io/badge/Follow%20on%20X-000000?style=for-the-badge&logo=X)](https://x.com/techironic11)

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

