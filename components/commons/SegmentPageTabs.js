import React from "react";

export default function SegmentPageTabs() {
  return (
    <ul class="nav nav-tabs_land " id="myTab" role="tablist">
      <li class="nav-item_land margin-lft" role="presentation">
        <button
          class="nav-link_land active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          Menu
        </button>
      </li>
      <li class="nav-item_land" role="presentation">
        <button
          class="nav-link_land"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          About
        </button>
      </li>
      <li class="nav-item_land" role="presentation">
        <button
          class="nav-link_land"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
        >
          Testimonials
        </button>
      </li>
    </ul>
  );
}
