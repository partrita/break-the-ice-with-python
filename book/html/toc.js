// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="Day_1.html"><strong aria-hidden="true">1.</strong> Day1</a></li><li class="chapter-item expanded "><a href="Day_2.html"><strong aria-hidden="true">2.</strong> Day2</a></li><li class="chapter-item expanded "><a href="Day_3.html"><strong aria-hidden="true">3.</strong> Day3</a></li><li class="chapter-item expanded "><a href="Day_4.html"><strong aria-hidden="true">4.</strong> Day4</a></li><li class="chapter-item expanded "><a href="Day_5.html"><strong aria-hidden="true">5.</strong> Day5</a></li><li class="chapter-item expanded "><a href="Day_6.html"><strong aria-hidden="true">6.</strong> Day6</a></li><li class="chapter-item expanded "><a href="Day_7.html"><strong aria-hidden="true">7.</strong> Day7</a></li><li class="chapter-item expanded "><a href="Day_8.html"><strong aria-hidden="true">8.</strong> Day8</a></li><li class="chapter-item expanded "><a href="Day_9.html"><strong aria-hidden="true">9.</strong> Day9</a></li><li class="chapter-item expanded "><a href="Day_10.html"><strong aria-hidden="true">10.</strong> Day10</a></li><li class="chapter-item expanded "><a href="Day_11.html"><strong aria-hidden="true">11.</strong> Day11</a></li><li class="chapter-item expanded "><a href="Day_12.html"><strong aria-hidden="true">12.</strong> Day12</a></li><li class="chapter-item expanded "><a href="Day_13.html"><strong aria-hidden="true">13.</strong> Day13</a></li><li class="chapter-item expanded "><a href="Day_14.html"><strong aria-hidden="true">14.</strong> Day14</a></li><li class="chapter-item expanded "><a href="Day_15.html"><strong aria-hidden="true">15.</strong> Day15</a></li><li class="chapter-item expanded "><a href="Day_16.html"><strong aria-hidden="true">16.</strong> Day16</a></li><li class="chapter-item expanded "><a href="Day_17.html"><strong aria-hidden="true">17.</strong> Day17</a></li><li class="chapter-item expanded "><a href="Day_18.html"><strong aria-hidden="true">18.</strong> Day18</a></li><li class="chapter-item expanded "><a href="Day_19.html"><strong aria-hidden="true">19.</strong> Day19</a></li><li class="chapter-item expanded "><a href="Day_20.html"><strong aria-hidden="true">20.</strong> Day20</a></li><li class="chapter-item expanded "><a href="Day_21.html"><strong aria-hidden="true">21.</strong> Day21</a></li><li class="chapter-item expanded "><a href="Day_22.html"><strong aria-hidden="true">22.</strong> Day22</a></li><li class="chapter-item expanded "><a href="Day_23.html"><strong aria-hidden="true">23.</strong> Day23</a></li><li class="chapter-item expanded "><a href="Day_24.html"><strong aria-hidden="true">24.</strong> Day24</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
