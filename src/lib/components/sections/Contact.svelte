<script lang="ts">import { site } from '$lib/content';</script>

<div class="contact">
  <div>
    <h1>{site.name}</h1>
    <p>Teaching office: {site.contact.teachingOffice}<br />
      Research lab: {site.contact.researchLab}<br />
      Email: <a href={`mailto:${site.contact.email}`}>{site.contact.email.replace('@', ' at ')}</a></p>
  </div>
  <div class="credit">
    <h2>{site.credit.name} - {site.credit.role}</h2>
    <p>Github: <a href={site.credit.github}>{site.credit.github}</a><br />
      Email: <a href={`mailto:${site.credit.email}`}>{site.credit.email}</a></p>
  </div>
</div>

<style>
  .contact { display: flex; flex-direction: column; justify-content: space-between; min-height: 100%; text-align: center; padding-bottom: 12px; box-sizing: border-box; }
  h2 { font-size: 1.17em; }
  p { font-size: 0.83em; }
  a { overflow-wrap: anywhere; }
  .credit { margin-top: 40px; }
</style>
