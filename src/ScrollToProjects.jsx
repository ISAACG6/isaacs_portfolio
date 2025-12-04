import React from "react";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToProjects() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const shouldScroll = location.state?.scrollToProjects;

    if (!shouldScroll) return;          // ✅ refresh (no state) -> no scroll

    const el = document.getElementById("projects-start");
    if (!el) return;

    // clear the state so future refreshes don't scroll
    navigate(location.pathname, { replace: true, state: {} });

    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [location, navigate]);

  return null;
}
