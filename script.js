// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn")
    const navMenu = document.getElementById("navMenu")
  
    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active")
        const icon = mobileMenuBtn.querySelector("i")
        if (navMenu.classList.contains("active")) {
          icon.classList.remove("fa-bars")
          icon.classList.add("fa-times")
        } else {
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }
      })
    }
  
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navMenu && navMenu.classList.contains("active")) {
          navMenu.classList.remove("active")
          const icon = mobileMenuBtn.querySelector("i")
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }
      })
    })
  
    // Tab functionality for members page
    const tabButtons = document.querySelectorAll(".tab-btn")
    const tabContents = document.querySelectorAll(".tab-content")
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab")
  
        // Remove active class from all buttons and contents
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabContents.forEach((content) => content.classList.remove("active"))
  
        // Add active class to clicked button and corresponding content
        button.classList.add("active")
        const targetContent = document.getElementById(targetTab)
        if (targetContent) {
          targetContent.classList.add("active")
        }
      })
    })
  
    // Contact Form Handling
    const contactForm = document.getElementById("contactForm")
    const successMessage = document.getElementById("successMessage")
  
    if (contactForm && successMessage) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Simulate form submission
        setTimeout(() => {
          contactForm.style.display = "none"
          successMessage.style.display = "block"
        }, 1000)
      })
    }
  
    // Donation Form Handling
    const donationForm = document.getElementById("donationForm")
    if (donationForm) {
      // Amount button handling
      const amountButtons = document.querySelectorAll(".amount-btn")
      const customAmountDiv = document.getElementById("customAmount")
      const customAmountInput = document.getElementById("customAmountInput")
  
      amountButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
          // Remove active class from all buttons
          amountButtons.forEach((b) => b.classList.remove("active"))
          // Add active class to clicked button
          this.classList.add("active")
  
          const amount = this.getAttribute("data-amount")
          if (amount === "custom") {
            customAmountDiv.style.display = "block"
            customAmountInput.focus()
          } else {
            customAmountDiv.style.display = "none"
          }
        })
      })
  
      // Custom amount input handling
      if (customAmountInput) {
        customAmountInput.addEventListener("input", function () {
          if (this.value) {
            amountButtons.forEach((btn) => {
              if (btn.getAttribute("data-amount") === "custom") {
                btn.classList.add("active")
              } else {
                btn.classList.remove("active")
              }
            })
          }
        })
      }
  
      // Payment method tabs
      const paymentTabs = document.querySelectorAll(".payment-tab")
      const paymentContents = document.querySelectorAll(".payment-content")
  
      paymentTabs.forEach((tab) => {
        tab.addEventListener("click", function () {
          const method = this.getAttribute("data-method")
  
          // Remove active class from all tabs
          paymentTabs.forEach((t) => t.classList.remove("active"))
          // Add active class to clicked tab
          this.classList.add("active")
  
          // Hide all payment content
          paymentContents.forEach((content) => {
            content.style.display = "none"
          })
  
          // Show selected payment content
          const selectedContent = document.getElementById(method + "Payment")
          if (selectedContent) {
            selectedContent.style.display = "block"
          }
  
          // Update donate button text
          const donateBtn = document.getElementById("donateBtn")
          if (donateBtn) {
            if (method === "mobile") {
              donateBtn.textContent = "Complete Payment in App"
              donateBtn.disabled = true
            } else {
              donateBtn.textContent = "Complete Donation"
              donateBtn.disabled = false
            }
          }
        })
      })
  
      // Form submission
      donationForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const activeAmountBtn = document.querySelector(".amount-btn.active")
        const amount = activeAmountBtn ? activeAmountBtn.getAttribute("data-amount") : "50"
        const finalAmount = amount === "custom" ? customAmountInput.value : amount
  
        alert(`Thank you for your donation of $${finalAmount}!`)
      })
    }
  
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href").substring(1)
        const targetElement = document.getElementById(targetId)
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  
    // Add scroll effect to navbar
    let lastScrollTop = 0
    const navbar = document.querySelector(".navbar")
  
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = "translateY(-100%)"
      } else {
        // Scrolling up
        navbar.style.transform = "translateY(0)"
      }
  
      lastScrollTop = scrollTop
    })
  
    // Add transition to navbar
    if (navbar) {
      navbar.style.transition = "transform 0.3s ease-in-out"
    }
  })
  
  // Reset contact form function
  function resetForm() {
    const contactForm = document.getElementById("contactForm")
    const successMessage = document.getElementById("successMessage")
  
    if (contactForm && successMessage) {
      contactForm.style.display = "block"
      successMessage.style.display = "none"
      contactForm.reset()
    }
  }
  
  // Add loading states to buttons
  function addLoadingState(button, originalText) {
    button.disabled = true
    button.textContent = "Loading..."
  
    setTimeout(() => {
      button.disabled = false
      button.textContent = originalText
    }, 2000)
  }
  
  // Initialize any additional interactive elements
  document.addEventListener("DOMContentLoaded", () => {
    // Add hover effects to cards
    const cards = document.querySelectorAll(
      ".service-card, .event-card, .leader-card, .info-card, .ministry-card, .testimonial-card",
    )
    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px)"
        this.style.transition = "transform 0.3s ease"
      })
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
      })
    })
  
    // Add animation to elements when they come into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)
  
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
      ".service-card, .event-card, .leader-card, .ministry-card, .timeline-item",
    )
    animatedElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })
  })
  