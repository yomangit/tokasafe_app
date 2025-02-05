<div>
    <div role="tablist" class="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" checked="checked" class="tab" aria-label="Event" />
        <div role="tabpanel" class="p-6 tab-content bg-base-100 border-base-300 rounded-box">
            <livewire:admin.people.event :user_id="$user_id">
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="tab " aria-label="Tab 2" />
        <div role="tabpanel" class="p-6 tab-content bg-base-100 border-base-300 rounded-box">
            <div id="toolbar-container"></div>
            <textarea name="editor" id="editor"></textarea>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
        <div role="tabpanel" class="p-6 tab-content bg-base-100 border-base-300 rounded-box">
            Tab content
        </div>
    </div>
    @push('styles')
        <script src="https://cdn.ckeditor.com/ckeditor5/41.4.2/classic/ckeditor.js"></script>
        <script>
            ClassicEditor
                .create(document.querySelector('#editor'), {
                    plugins: [Essentials, Paragraph, Bold, Italic, Underline],
                    toolbar: ['bold', 'italic', 'underline']
                })
                .catch(error => {
                    console.error(error);
                });
        </script>
    @endpush

</div>
