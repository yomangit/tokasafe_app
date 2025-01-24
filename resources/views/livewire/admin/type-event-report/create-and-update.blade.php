<div>
    <div wire:target="store" wire:loading.class="skeleton" class="p-2">
        <div
            class="py-4 font-extrabold text-transparent divider divider-info bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            {{ $divider }}</div>
        <form wire:submit.prevent='store'>
            @csrf
            @method('PATCH')
            <div class="w-full max-w-xs sm:max-w-sm xl:max-w-xl form-control">
                <x-label-req :value="__('Name')" />
                <x-input wire:model.blur='type_eventreport_name' :error="$errors->get('type_eventreport_name')" />
                <x-label-error :messages="$errors->get('type_eventreport_name')" />
            </div>
            <div class="w-full max-w-xs sm:max-w-sm xl:max-w-xl form-control">
                <x-label-req :value="__('Event Category')" />
                <x-select wire:model='event_category_id' :error="$errors->get('event_category_id')">
                    <option value="" selected>Select an option</option>
                    @foreach ($EventCategory as $event_category)
                        <option value="{{ $event_category->id }}">
                            {{ $event_category->event_category_name }}</option>
                    @endforeach
                </x-select>
                <x-label-error :messages="$errors->get('event_category_id')" class="mt-0" />
            </div>
            <div>
            </div>
            <div class="modal-action">
                <x-btn-save wire:target="store" wire:loading.class="btn-disabled">{{ __('Save') }}</x-btn-save>
                    <x-btn-close wire:target="store" wire:loading.class="btn-disabled" wire:click="$dispatch('closeModal')"
                        >{{ __('Close') }}</x-btn-close>
            </div>
        </form>
    </div>
</div>
